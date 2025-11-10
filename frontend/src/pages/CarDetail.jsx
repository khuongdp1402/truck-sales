import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ContactForm from '../components/ContactForm';
import Car360View from '../components/Car360View';
import { cars } from '../mock/cars';
import './CarDetail.css';

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);
  
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="car-detail-page">
        <div className="container">
          <div className="not-found">
            <h2>Không tìm thấy xe</h2>
            <button onClick={() => navigate('/cars')} className="btn-primary">
              Quay lại danh sách
            </button>
          </div>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const galleryImages = [
    car.image,
    car.image,
    car.image,
    car.image
  ];

  return (
    <div className="car-detail-page">
      <div className="car-detail-hero">
        <img 
          src={car.image || 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'} 
          alt={car.name}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';
          }}
        />
        <div className="hero-overlay-detail"></div>
        <div className="hero-content-detail">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {car.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle-detail"
          >
            {car.brand} • {car.year}
          </motion.p>
        </div>
      </div>

      <section className="car-detail-section section">
        <div className="container">
          <div className="car-detail-content">
            <div className="car-detail-main">
              <div className="car-info-card">
                <h2 className="car-detail-price">{formatPrice(car.price)}</h2>
                <div className="car-specs">
                  <div className="spec-item">
                    <span className="spec-label">Thương hiệu:</span>
                    <span className="spec-value">{car.brand}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Năm sản xuất:</span>
                    <span className="spec-value">{car.year}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Giá:</span>
                    <span className="spec-value">{formatPrice(car.price)}</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="btn-primary contact-btn"
                >
                  Liên hệ ngay
                </button>
              </div>

              <div className="car-description">
                <h3>Mô tả</h3>
                <p>{car.description}</p>
                
                {car.features && (
                  <div className="car-features">
                    <h3>Tính năng nổi bật</h3>
                    <ul>
                      {car.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="car-gallery">
              <h3>Thư viện ảnh</h3>
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                className="gallery-swiper"
              >
                {galleryImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="gallery-item">
                      <img 
                        src={img || 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} 
                        alt={`${car.name} - ${index + 1}`}
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {car.panorama360Url && (
        <Car360View 
          panorama360Url={car.panorama360Url} 
          carName={car.name}
        />
      )}

      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowContactModal(false)}
            >
              ×
            </button>
            <ContactForm onClose={() => setShowContactModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetail;

