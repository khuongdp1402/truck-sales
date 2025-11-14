import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';
import Car360View from '../components/Car360View';
import CarGallery from '../components/CarGallery';
import CarSpecsTabs from '../components/CarSpecsTabs';
import CarouselBrand from '../components/CarouselBrand';
import VideoSection from '../components/VideoSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
import { cars } from '../mock/cars';
import './Home.css';

const Home = () => {
  const featuredCars = cars.slice(0, 4);

  return (
    <div className="home-page">
      <Hero />
      
      <section className="featured-cars section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Xe nổi bật <span>hôm nay</span>
          </motion.h2>
          <div className="cars-grid">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      <Car360View />

      <CarGallery />

      <CarSpecsTabs />

      <CarouselBrand />

      <VideoSection />

      <TestimonialsSection />

      <section className="about-section section">
        <div className="container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              Về <span>LuxCar</span>
            </h2>
            <div className="about-text">
              <p>
                LuxCar là đại lý chuyên cung cấp xe tải và xe khách hàng đầu, đối tác 
                chính thức của Hyundai và Kimlong 99. Với hơn 10 năm kinh nghiệm trong 
                ngành vận tải, chúng tôi cam kết mang đến cho khách hàng những sản phẩm 
                chất lượng cao và dịch vụ chăm sóc tốt nhất.
              </p>
              <p>
                Đội ngũ chuyên viên tư vấn giàu kinh nghiệm của chúng tôi luôn sẵn sàng 
                hỗ trợ bạn tìm được chiếc xe phù hợp nhất với nhu cầu kinh doanh và ngân sách. 
                Từ xe tải nhỏ đến xe khách lớn, từ Hyundai đến Kimlong 99, LuxCar có tất cả.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="contact-section section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Liên hệ <span>với chúng tôi</span>
          </motion.h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;

