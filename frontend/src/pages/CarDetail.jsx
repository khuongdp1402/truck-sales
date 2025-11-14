import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ContactForm from '../components/ContactForm';
import { cars } from '../mock/cars';
import './CarDetail.css';

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
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

  // Gallery images - main image + 3 thumbnails
  const isBus = car.name.toLowerCase().includes('county') || car.name.toLowerCase().includes('universe') || car.name.toLowerCase().includes('bus');
  const isKimlong = car.brand === 'Kimlong 99';
  const truckImage = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  const busImage = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  
  // Use real Kimlong images if available
  let galleryImages = [];
  if (isKimlong && isBus) {
    // Kimlong bus images
    if (car.name.includes('Giường Nằm')) {
      galleryImages = [
        car.image,
        'https://kimlongmotor.com.vn/images/san_pham/KIMLONG_bus_giuong_nam.png',
        'https://kimlongmotor.com.vn/images/san_pham/bus/Web_-_KLM.jpg',
        'https://kimlongmotor.com.vn/images/hinh_anh/WEB-1114-moi.jpg'
      ];
    } else if (car.name.includes('29')) {
      galleryImages = [
        car.image,
        'https://kimlongmotor.com.vn/images/san_pham/KIMLONG_29-N29/KIMLONG_bus_29_cho_-_vang_decal.png',
        'https://kimlongmotor.com.vn/images/san_pham/bus/Web_-_KLM.jpg',
        'https://kimlongmotor.com.vn/images/hinh_anh/WEB-1114-moi.jpg'
      ];
    } else if (car.name.includes('47')) {
      galleryImages = [
        car.image,
        'https://kimlongmotor.com.vn/images/san_pham/Bus_ghe_ngoi_KIMLONG_99/xe_47_ghe_ngoi_Kimlong_99_-_nen_xam__1.png',
        'https://kimlongmotor.com.vn/images/san_pham/bus/Web_-_KLM.jpg',
        'https://kimlongmotor.com.vn/images/hinh_anh/WEB-1114-moi.jpg'
      ];
    } else if (car.name.includes('X9')) {
      galleryImages = [
        car.image,
        'https://kimlongmotor.com.vn/images/hinh_anh/XE_KIM_LONG_X9_2.jpg',
        'https://kimlongmotor.com.vn/images/san_pham/bus/Web_-_KLM.jpg',
        'https://kimlongmotor.com.vn/images/hinh_anh/WEB-1114-moi.jpg'
      ];
    } else {
      // Default Kimlong bus
      galleryImages = [
        car.image,
        'https://kimlongmotor.com.vn/images/san_pham/bus/Web_-_KLM.jpg',
        'https://kimlongmotor.com.vn/images/hinh_anh/WEB-1114-moi.jpg',
        'https://kimlongmotor.com.vn/images/san_pham/KIMLONG_bus_giuong_nam.png'
      ];
    }
  } else {
    // Default gallery for other vehicles
    galleryImages = [
      car.image || (isBus ? busImage : truckImage),
      isBus ? busImage : truckImage,
      isBus ? busImage : truckImage,
      isBus ? busImage : truckImage
    ];
  }

  // Car colors - appropriate for trucks and buses
  const carColors = [
    { name: 'Trắng', hex: '#FFFFFF' },
    { name: 'Xám bạc', hex: '#808080' },
    { name: 'Xanh dương', hex: '#1E3A8A' },
    { name: 'Đỏ', hex: '#DC2626' },
  ];

  // Car specifications - dynamic based on vehicle type
  const isTruck = car.name.toLowerCase().includes('hd') || car.name.toLowerCase().includes('kl-');
  const carSpecs = isBus ? [
    { label: 'Số chỗ ngồi', value: car.name.includes('29') ? '29 chỗ' : '45 chỗ' },
    { label: 'Động cơ', value: 'Diesel 4.0L' },
    { label: 'Công suất', value: '180 HP' },
    { label: 'Hộp số', value: '6 cấp tự động' },
    { label: 'Dung tích bình xăng', value: '150L' },
    { label: 'Tiêu thụ nhiên liệu', value: '12L/100km' },
    { label: 'Điều hòa', value: 'Có' },
    { label: 'Hệ thống giải trí', value: 'Có' },
  ] : isTruck ? [
    { label: 'Tải trọng', value: car.name.includes('120') ? '1.2 tấn' : car.name.includes('210') ? '2.1 tấn' : '3.5 tấn' },
    { label: 'Động cơ', value: 'Diesel 2.5L' },
    { label: 'Công suất', value: '120 HP' },
    { label: 'Mô-men xoắn', value: '300 Nm' },
    { label: 'Hộp số', value: '5 cấp sàn' },
    { label: 'Dung tích bình xăng', value: '80L' },
    { label: 'Tiêu thụ nhiên liệu', value: '8L/100km' },
    { label: 'Kích thước thùng', value: '3.2m x 1.8m x 0.4m' },
  ] : [
    { label: 'Công suất', value: '450 HP' },
    { label: 'Động cơ', value: 'V8 Twin-Turbo' },
    { label: 'Tốc độ tối đa', value: '305 km/h' },
    { label: 'Dung tích bình xăng', value: '75L' },
    { label: 'Hộp số', value: '8 cấp tự động' },
    { label: 'Dẫn động', value: 'AWD' },
    { label: 'Tiêu thụ nhiên liệu', value: '8.5L/100km' },
    { label: 'Số chỗ ngồi', value: '5 chỗ' },
  ];

  const openGallery = (index) => {
    setSelectedImageIndex(index);
    setShowGalleryModal(true);
  };

  return (
    <div className="car-detail-page">
      {/* Hero Section */}
      <div className="car-detail-hero">
        <img 
          src={galleryImages[0]} 
          alt={car.name}
          onError={(e) => {
            if (isKimlong && isBus) {
              e.target.src = 'https://kimlongmotor.com.vn/images/san_pham/bus/Web_-_KLM.jpg';
            } else {
              e.target.src = isBus ? busImage : truckImage;
            }
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
          <div className="car-detail-layout">
            {/* Left Column - Gallery */}
            <div className="car-detail-gallery-section">
              <div className="main-image-container">
                <img 
                  src={galleryImages[0]} 
                  alt={car.name}
                  onClick={() => openGallery(0)}
                  className="main-image"
                />
              </div>
              <div className="thumbnail-images">
                {galleryImages.slice(1, 4).map((img, index) => (
                  <div 
                    key={index}
                    className="thumbnail-item"
                    onClick={() => openGallery(index + 1)}
                  >
                    <img 
                      src={img} 
                      alt={`${car.name} - ${index + 2}`}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="car-detail-info-section">
              <div className="car-price-card">
                <h2 className="car-detail-price">{formatPrice(car.price)}</h2>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="btn-primary contact-btn"
                >
                  Liên hệ ngay
                </button>
              </div>

              {/* Basic Info */}
              <div className="car-basic-info">
                <h3>Thông tin cơ bản</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Thương hiệu:</span>
                    <span className="info-value">{car.brand}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Năm sản xuất:</span>
                    <span className="info-value">{car.year}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Giá:</span>
                    <span className="info-value">{formatPrice(car.price)}</span>
                  </div>
                </div>
              </div>

              {/* Car Colors */}
              <div className="car-colors-section">
                <h3>Màu sắc có sẵn</h3>
                <div className="colors-grid">
                  {carColors.map((color, index) => (
                    <div key={index} className="color-option">
                      <div 
                        className="color-circle" 
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <span className="color-name">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="car-description-section">
            <h3>Mô tả</h3>
            <p>{car.description}</p>
          </div>

          {/* Specifications Section */}
          <div className="car-specifications-section">
            <h3>Thông số kỹ thuật</h3>
            <div className="specs-grid">
              {carSpecs.map((spec, index) => (
                <div key={index} className="spec-card">
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          {car.features && (
            <div className="car-features-section">
              <h3>Tính năng nổi bật</h3>
              <div className="features-grid">
                {car.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {showGalleryModal && (
          <motion.div
            className="gallery-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowGalleryModal(false)}
          >
            <motion.div
              className="gallery-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="gallery-modal-close"
                onClick={() => setShowGalleryModal(false)}
              >
                <FiX size={24} />
              </button>
              
              <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                thumbs={{ swiper: thumbsSwiper }}
                initialSlide={selectedImageIndex}
                className="gallery-modal-swiper"
              >
                {galleryImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={img} 
                      alt={`${car.name} - ${index + 1}`}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                className="gallery-modal-thumbs"
              >
                {galleryImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
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
