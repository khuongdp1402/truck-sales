import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiRotateCw } from 'react-icons/fi';
import './Car360View.css';

const Car360View = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const startXRef = useRef(0);
  const lastRotationRef = useRef(0);
  const containerRef = useRef(null);

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

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startXRef.current;
      const newRotation = lastRotationRef.current + deltaX * 0.5;
      setRotation(newRotation);
    };

    const handleMouseUp = () => {
      lastRotationRef.current = rotation;
      setIsDragging(false);
    };

    const handleTouchMove = (e) => {
      if (!e.touches[0]) return;
      const deltaX = e.touches[0].clientX - startXRef.current;
      const newRotation = lastRotationRef.current + deltaX * 0.5;
      setRotation(newRotation);
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      lastRotationRef.current = rotation;
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
  }, [isDragging, rotation]);

  useEffect(() => {
    if (!isDragging && !showOverlay) {
      const timer = setTimeout(() => {
        setShowOverlay(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isDragging, showOverlay]);

  // Image URL - using a real Kimlong bus image for 360 effect
      const imageUrl = "https://kimlongmotor.com.vn/images/san_pham/bus/Web_-_KLM.jpg";

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
        </motion.h2>
        
        <motion.div
          ref={containerRef}
          className="car-360-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div 
            className="car-360-image"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div 
              className="car-360-image-wrapper"
              style={{
                transform: `rotateY(${rotation}deg)`,
                transformStyle: 'preserve-3d',
                transition: isDragging ? 'none' : 'transform 0.1s ease-out'
              }}
            >
              <img 
                src={imageUrl}
                alt="Car 360 view"
                draggable="false"
                    onError={(e) => {
                      e.target.src = 'https://kimlongmotor.com.vn/images/san_pham/bus/Web_-_KLM.jpg';
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
                <p className="rotate-text">Kéo để xem quanh xe</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Car360View;
