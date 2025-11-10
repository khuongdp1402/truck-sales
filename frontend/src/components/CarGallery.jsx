import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CarGallery.css';

const CarGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Car Gallery 1'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Car Gallery 2'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Car Gallery 3'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Car Gallery 4'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Car Gallery 5'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Car Gallery 6'
    }
  ];

  return (
    <section className="car-gallery-section section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Bộ sưu tập <span>hình ảnh</span>
        </motion.h2>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="gallery-image-wrapper">
                <img src={image.src} alt={image.alt} />
                <div className="gallery-overlay">
                  <Link to="/cars" className="gallery-link">
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarGallery;

