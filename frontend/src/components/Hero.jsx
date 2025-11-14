import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './Hero.css';

const heroSlides = [
  {
    id: 1,
    image: 'https://kimlongmotor.com.vn/images/san_pham/bus/Web_-_KLM.jpg',
    title: 'Xe tải & Xe khách chất lượng cao',
    subtitle: 'Hyundai và Kimlong 99 - Đối tác tin cậy cho doanh nghiệp'
  },
  {
    id: 2,
    image: 'https://kimlongmotor.com.vn/images/hinh_anh/WEB-1114-moi.jpg',
    title: 'Xe tải đa dạng tải trọng',
    subtitle: 'Từ 1.2 tấn đến 3.5 tấn, phù hợp mọi nhu cầu vận chuyển'
  },
  {
    id: 3,
    image: 'https://kimlongmotor.com.vn/images/san_pham/KIMLONG_bus_giuong_nam.png',
    title: 'Xe khách tiện nghi',
    subtitle: 'Từ 29 đến 47 chỗ, phục vụ mọi tuyến đường'
  }
];

const Hero = () => {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: 'hero-pagination-bullet',
          bulletActiveClass: 'hero-pagination-bullet-active',
        }}
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="hero-title"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="hero-subtitle"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link to="/cars" className="btn-primary hero-btn">
                    Xem xe ngay
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

