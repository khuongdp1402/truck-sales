import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`footer ${isDark ? 'dark' : 'light'}`}>
      <div className="gold-line"></div>
      <div className="footer-content">
        <div className="footer-main">
          <p>© 2025 LuxCar. All rights reserved.</p>
          <p className="footer-subtitle">Khám phá dòng xe đẳng cấp</p>
        </div>
        <div className="footer-social">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

