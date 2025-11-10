import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    role: 'Khách hàng thân thiết',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'Dịch vụ tuyệt vời! Tôi đã mua chiếc xe mơ ước tại AutoLux. Đội ngũ tư vấn rất chuyên nghiệp và nhiệt tình. Chiếc xe hoạt động hoàn hảo và tôi rất hài lòng.',
    subtitle: 'Đã mua xe BMW Series 5'
  },
  {
    id: 2,
    name: 'Trần Thị B',
    role: 'Doanh nhân',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'AutoLux không chỉ bán xe mà còn mang đến trải nghiệm mua sắm đẳng cấp. Dịch vụ hậu mãi rất tốt, luôn sẵn sàng hỗ trợ khi cần.',
    subtitle: 'Đã mua xe Mercedes-Benz E-Class'
  },
  {
    id: 3,
    name: 'Lê Văn C',
    role: 'Người đam mê xe thể thao',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'Tuyệt vời! Chiếc xe thể thao tôi mua vượt quá mong đợi. Chất lượng và hiệu suất đều xuất sắc. AutoLux thực sự là địa chỉ đáng tin cậy.',
    subtitle: 'Đã mua xe Audi A5 Sportback'
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    role: 'Giám đốc điều hành',
    image: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    text: 'Dịch vụ chuyên nghiệp từ A đến Z. Từ tư vấn, thủ tục đến giao xe đều được thực hiện rất chu đáo. Tôi sẽ giới thiệu AutoLux cho bạn bè.',
    subtitle: 'Đã mua xe Lexus ES 300h'
  },
  {
    id: 5,
    name: 'Hoàng Văn E',
    role: 'Nhà đầu tư',
    image: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    text: 'Chất lượng xe và dịch vụ đều đạt chuẩn quốc tế. AutoLux xứng đáng là đại lý xe hơi cao cấp hàng đầu. Tôi rất hài lòng với quyết định của mình.',
    subtitle: 'Đã mua xe Porsche Cayenne'
  },
  {
    id: 6,
    name: 'Võ Thị F',
    role: 'Bác sĩ',
    image: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    text: 'Mua xe tại AutoLux là một trải nghiệm tuyệt vời. Đội ngũ nhân viên rất am hiểu và tư vấn phù hợp với nhu cầu. Tôi cảm thấy được chăm sóc tận tâm.',
    subtitle: 'Đã mua xe Volvo XC60'
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
            Những chia sẻ chân thật từ khách hàng đã tin tưởng và lựa chọn AutoLux
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

