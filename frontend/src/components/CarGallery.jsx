import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CarGallery.css';

const CarGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://kimlongmotor.com.vn/images/san_pham/bus/Web_-_KLM.jpg',
      alt: 'Bus KIMLONG 99'
    },
    {
      id: 2,
      src: 'https://kimlongmotor.com.vn/images/hinh_anh/WEB-1114-moi.jpg',
      alt: 'Bus KIMLONG 99 Premium'
    },
    {
      id: 3,
      src: 'https://kimlongmotor.com.vn/images/san_pham/KIMLONG_bus_giuong_nam.png',
      alt: 'Bus giường nằm KIMLONG 99'
    },
    {
      id: 4,
      src: 'https://kimlongmotor.com.vn/images/san_pham/Bus_ghe_ngoi_KIMLONG_99/xe_47_ghe_ngoi_Kimlong_99_-_nen_xam__1.png',
      alt: 'Bus ghế ngồi KIMLONG 99 - 47 chỗ'
    },
    {
      id: 5,
      src: 'https://kimlongmotor.com.vn/images/hinh_anh/XE_KIM_LONG_X9_2.jpg',
      alt: 'Minibus KIMLONG X9'
    },
    {
      id: 6,
      src: 'https://kimlongmotor.com.vn/images/san_pham/KIMLONG_29-N29/KIMLONG_bus_29_cho_-_vang_decal.png',
      alt: 'Bus ghế ngồi KIMLONG 29 chỗ'
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

