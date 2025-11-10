import { motion } from 'framer-motion';
import { FiRotateCw } from 'react-icons/fi';
import './Car360View.css';

const Car360View = () => {
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
          whileHover={{ scale: 1.02 }}
        >
          <div className="car-360-image">
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Car 360 view"
            />
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Car360View;

