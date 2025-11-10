import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiRotateCw } from 'react-icons/fi';
import './Car360View.css';

// Sample 360 panorama URLs - Equirectangular format
// These are demo URLs. For production, use actual 360 panorama images
const DEMO_360_URLS = [
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.1.0&auto=format&fit=crop&w=4000&q=80",
  // Add more 360 panorama URLs here
  // Example format: equirectangular panorama image (2:1 aspect ratio, typically 4096x2048 or larger)
];

const Car360View = ({ panorama360Url = null, carName = null }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [use360Demo, setUse360Demo] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const startXRef = useRef(0);
  const lastRotationRef = useRef(0);

  // Priority: prop > local 360 image > demo URL > default Unsplash
  // Vite serves files from public/ folder
  // BASE_URL from vite.config.js: '/truck-sales/' (with trailing slash)
  // In dev mode, files are served from root, but BASE_URL is still '/truck-sales/'
  // Vite handles base path automatically for assets in public/, but we need to handle it manually for absolute paths
  const baseUrl = import.meta.env.BASE_URL || '/';
  const isDev = import.meta.env.DEV;
  
  // Helper to build URL for public assets
  // In dev: Vite serves from root, so '/demo-images/...' works
  // In production: Need base path, so '/truck-sales/demo-images/...'
  const buildPublicUrl = (path) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    
    // In dev mode, Vite serves public assets from root (ignores base path)
    // In production, we need to prepend base URL
    if (isDev) {
      // In dev, just use the path as-is (Vite handles it)
      return `/${cleanPath}`;
    } else {
      // In production, prepend base URL
      const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
      return `${base}${cleanPath}`;
    }
  };
  
  // Build local 360 URL
  const local360Path = 'demo-images/autoshop_01_4k.jpg';
  const local360Url = buildPublicUrl(local360Path);
  
  const defaultImageUrl = "https://images.unsplash.com/photo-1557971370-e7298ee473fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1760";
  const demo360Url = DEMO_360_URLS[0];
  
  // Determine which image to use
  const getImageUrl = () => {
    if (panorama360Url) {
      // If panorama360Url is provided
      // If it's an external URL (starts with http), use it directly
      if (panorama360Url.startsWith('http://') || panorama360Url.startsWith('https://')) {
        return panorama360Url;
      }
      // If it starts with /, it's an absolute path from public folder
      // Use buildPublicUrl to handle base path correctly
      return buildPublicUrl(panorama360Url);
    }
    if (use360Demo) {
      return demo360Url; // Use demo 360 URL
    }
    // Default: use local 360 image if available
    return local360Url; // Use local 360 panorama
  };

  const currentImageUrl = getImageUrl();
  
  // Debug logging
  useEffect(() => {
    console.log('🔍 Car360View Debug:', {
      panorama360Url,
      currentImageUrl,
      local360Url,
      baseUrl,
      isDev,
      is360Image: !!panorama360Url || currentImageUrl === local360Url || use360Demo || currentImageUrl === demo360Url
    });
  }, [panorama360Url, currentImageUrl, local360Url, baseUrl, isDev, use360Demo, demo360Url]);
  
  // 360 image if: prop provided, using local 360, using demo, or URL suggests it's a panorama
  const is360Image = !!panorama360Url || currentImageUrl === local360Url || use360Demo || currentImageUrl === demo360Url;
  
  // Calculate object position for 360° panorama
  // For equirectangular panorama: image is 2:1 ratio, container shows portion of it
  // When dragging: move objectPosition to show different parts of the 360° image
  const getObjectPosition = () => {
    if (!is360Image) return 'center';
    
    // For 360° panorama, map rotation (in pixels) to objectPosition percentage
    // The image is displayed at 200% width, so we can scroll through it
    // Sensitivity: controls how fast the image moves relative to mouse movement
    const sensitivity = 0.15; // Lower = smoother, more precise control
    
    // Calculate position: start at 50% (center), adjust based on rotation
    // Negative rotation (drag left) = show right side of image (higher %)
    // Positive rotation (drag right) = show left side of image (lower %)
    const basePosition = 50;
    const offset = rotation * sensitivity;
    let position = basePosition - offset;
    
    // Normalize position to 0-100% range
    // For true 360°, we allow wrapping, but clamp for better UX
    position = Math.max(0, Math.min(100, position));
    
    return `${position}% center`;
  };
  
  const objectPosition = getObjectPosition();

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    lastRotationRef.current = rotation;
    setShowOverlay(false);
    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    lastRotationRef.current = rotation;
    setShowOverlay(false);
    e.preventDefault();
  };

  useEffect(() => {
    if (!isDragging) return;
    
    // For 360 images, use higher sensitivity and allow infinite rotation
    // For regular images, limit rotation range
    const sensitivity = is360Image ? 3 : 1;
    const maxRotation = is360Image ? Infinity : 200;
    
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startXRef.current;
      const newRotation = lastRotationRef.current + deltaX * sensitivity;
      
      // For 360 images, allow continuous rotation (wrap around)
      // For regular images, clamp the rotation
      const clampedRotation = is360Image 
        ? newRotation  // Allow infinite rotation for 360 images
        : Math.max(-maxRotation, Math.min(maxRotation, newRotation));
      
      setRotation(clampedRotation);
    };
    
    const handleMouseUp = () => {
      setRotation(prev => {
        lastRotationRef.current = prev;
        return prev;
      });
      setIsDragging(false);
    };
    
    const handleTouchMove = (e) => {
      if (!e.touches[0]) return;
      const deltaX = e.touches[0].clientX - startXRef.current;
      const newRotation = lastRotationRef.current + deltaX * sensitivity;
      const clampedRotation = is360Image 
        ? newRotation 
        : Math.max(-maxRotation, Math.min(maxRotation, newRotation));
      
      setRotation(clampedRotation);
      e.preventDefault();
    };
    
    const handleTouchEnd = () => {
      setRotation(prev => {
        lastRotationRef.current = prev;
        return prev;
      });
      setIsDragging(false);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, is360Image]);

  // Sync lastRotationRef when rotation changes (when not dragging)
  useEffect(() => {
    if (!isDragging) {
      lastRotationRef.current = rotation;
    }
  }, [rotation, isDragging]);

  // Reset overlay after a delay when not dragging
  useEffect(() => {
    if (!isDragging && !showOverlay) {
      const timer = setTimeout(() => {
        setShowOverlay(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isDragging, showOverlay]);

  return (
    <section className="car-360-section section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trải nghiệm góc nhìn <span>360°</span>
          {carName && <span className="car-name-badge">{carName}</span>}
        </motion.h2>
        
        <motion.div
          className="car-360-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={containerRef}
        >
          <div 
            className="car-360-image"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div className="car-360-image-wrapper">
              <img 
                ref={imageRef}
                src={currentImageUrl}
                alt={carName ? `${carName} 360 view` : "Car 360 view"}
                className={is360Image ? 'panorama-360' : ''}
                style={{
                  width: is360Image ? '200%' : '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: objectPosition,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  transition: isDragging ? 'none' : 'object-position 0.1s ease-out',
                  display: 'block'
                }}
                onError={(e) => {
                  console.error('❌ Failed to load 360 image:', currentImageUrl);
                  console.error('Environment:', { isDev, baseUrl, panorama360Url });
                  
                  // Store the current error URL to avoid infinite retry loops
                  const errorUrl = e.target.src;
                  
                  // Try alternative paths based on environment
                  const altPaths = isDev 
                    ? [
                        'http://upload.wikimedia.org/wikipedia/commons/a/a5/Harderwijk_harbour_2018_-_360_panorama.jpg', // Dev: root path
                        `${baseUrl}demo-images/autoshop_01_4k.jpg`, // Dev: with base (if Vite uses it)
                      ]
                    : [
                        'http://upload.wikimedia.org/wikipedia/commons/a/a5/Harderwijk_harbour_2018_-_360_panorama.jpg', // Production: try root (might work)
                        `demo-images/autoshop_01_4k.jpg`,  // Production: relative
                      ];
                  
                  // Check if we should try alternative paths
                  if (errorUrl !== demo360Url && errorUrl !== defaultImageUrl) {
                    // Find an alternative path we haven't tried
                    const triedUrls = new Set([errorUrl]);
                    let nextUrl = null;
                    
                    for (const altPath of altPaths) {
                      if (!triedUrls.has(altPath)) {
                        nextUrl = altPath;
                        break;
                      }
                    }
                    
                    if (nextUrl) {
                      console.log('🔄 Trying alternative path:', nextUrl);
                      e.target.src = nextUrl;
                      return;
                    }
                  }
                  
                  // If all local paths failed, fallback to demo URL
                  if (errorUrl !== demo360Url && errorUrl !== defaultImageUrl) {
                    console.log('⚠️ Falling back to demo 360 URL from Unsplash');
                    e.target.src = demo360Url;
                    setUse360Demo(true);
                  } else if (errorUrl !== defaultImageUrl) {
                    console.log('⚠️ Falling back to default Unsplash image');
                    e.target.src = defaultImageUrl;
                  } else {
                    console.error('❌ All image load attempts failed');
                  }
                }}
                onLoad={() => {
                  // Image loaded successfully
                  console.log('✅ 360° panorama image loaded successfully:', currentImageUrl);
                  if (is360Image) {
                    console.log('Image type: 360° panorama');
                  }
                }}
              />
            </div>
            {showOverlay && (
              <div className="car-360-overlay">
                <motion.div
                  className="rotate-icon"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <FiRotateCw size={48} />
                </motion.div>
                <p className="rotate-text">
                  {is360Image ? 'Kéo để xem quanh xe 360°' : 'Kéo để xem quanh xe'}
                </p>
                {!is360Image && (
                  <p className="info-text">
                    <small>Đang tải ảnh 360°...</small>
                  </p>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Car360View;

