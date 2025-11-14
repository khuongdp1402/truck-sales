import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    role: 'Chủ doanh nghiệp vận tải',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'Dịch vụ tuyệt vời! Tôi đã mua đội xe tải Hyundai tại LuxCar. Đội ngũ tư vấn rất chuyên nghiệp và nhiệt tình. Xe hoạt động bền bỉ và tiết kiệm nhiên liệu.',
    subtitle: 'Đã mua 5 xe Hyundai HD210'
  },
  {
    id: 2,
    name: 'Trần Thị B',
    role: 'Giám đốc công ty du lịch',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'LuxCar không chỉ bán xe mà còn mang đến giải pháp vận tải hoàn chỉnh. Dịch vụ hậu mãi rất tốt, luôn sẵn sàng hỗ trợ khi cần.',
    subtitle: 'Đã mua 3 xe Hyundai Universe 45 chỗ'
  },
  {
    id: 3,
    name: 'Lê Văn C',
    role: 'Chủ cửa hàng bán lẻ',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'Tuyệt vời! Chiếc xe tải Kimlong 99 tôi mua vượt quá mong đợi. Chất lượng tốt, giá cả hợp lý. LuxCar thực sự là địa chỉ đáng tin cậy.',
    subtitle: 'Đã mua xe Kimlong 99 KL-210'
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    role: 'Giám đốc điều hành',
    image: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    text: 'Dịch vụ chuyên nghiệp từ A đến Z. Từ tư vấn, thủ tục đến giao xe đều được thực hiện rất chu đáo. Tôi sẽ giới thiệu LuxCar cho đối tác.',
    subtitle: 'Đã mua đội xe Hyundai County'
  },
  {
    id: 5,
    name: 'Hoàng Văn E',
    role: 'Nhà đầu tư',
    image: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    text: 'Chất lượng xe và dịch vụ đều đạt chuẩn. LuxCar xứng đáng là đại lý xe tải và xe khách hàng đầu. Tôi rất hài lòng với quyết định của mình.',
    subtitle: 'Đã đầu tư đội xe Kimlong 99'
  },
  {
    id: 6,
    name: 'Võ Thị F',
    role: 'Chủ doanh nghiệp logistics',
    image: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    text: 'Mua xe tại LuxCar là một trải nghiệm tuyệt vời. Đội ngũ nhân viên rất am hiểu và tư vấn phù hợp với nhu cầu kinh doanh. Tôi cảm thấy được chăm sóc tận tâm.',
    subtitle: 'Đã mua 10 xe tải Hyundai và Kimlong 99'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section section">
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Phản hồi từ <span>khách hàng</span>
          </h2>
          <p className="testimonials-subtitle">
            Những chia sẻ chân thật từ khách hàng đã tin tưởng và lựa chọn LuxCar
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-subtitle">{testimonial.subtitle}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              
              <div className="testimonial-quote">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

