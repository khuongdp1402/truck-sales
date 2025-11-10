import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './CarouselBrand.css';
import { brands } from '../mock/cars';

const CarouselBrand = () => {
  return (
    <section className="brand-carousel-section">
      <div className="container">
        <h2 className="section-title">
          Thương hiệu <span>đối tác</span>
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="brand-swiper"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="brand-item">
                <div className="brand-logo">
                  <span className="brand-name">{brand.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CarouselBrand;

