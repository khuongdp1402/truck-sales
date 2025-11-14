import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiRotateCw } from 'react-icons/fi';
import './Car360View.css';

const Car360View = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [startX, setStartX] = useState(0);
  const [lastRotation, setLastRotation] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setLastRotation(rotation);
    setShowOverlay(false);
    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setLastRotation(rotation);
    setShowOverlay(false);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const newRotation = lastRotation + deltaX * 0.5;
    setRotation(newRotation);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !e.touches[0]) return;
    const deltaX = e.touches[0].clientX - startX;
    const newRotation = lastRotation + deltaX * 0.5;
    setRotation(newRotation);
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setLastRotation(rotation);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setLastRotation(rotation);
  };

  // Image URL - using a car image that works well for 360 effect
  const imageUrl = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

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
          className="car-360-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
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
                  e.target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
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
