import { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Demo only - Form submission not implemented yet');
    if (onClose) {
      onClose();
    }
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Liên hệ với chúng tôi</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Họ và tên</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nhập họ và tên"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Nhập số điện thoại"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Tin nhắn</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Nhập tin nhắn của bạn"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="form-actions">
          {onClose && (
            <button type="button" onClick={onClose} className="btn-secondary">
              Hủy
            </button>
          )}
          <button type="submit" className="btn-primary">
            Gửi tin nhắn
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

