import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">AutoLux</span>
        </Link>
        
        <ul className="navbar-menu">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Trang chủ
            </Link>
          </li>
          <li>
            <Link 
              to="/cars" 
              className={location.pathname === '/cars' ? 'active' : ''}
            >
              Xe
            </Link>
          </li>
          <li>
            <Link 
              to="/"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={location.pathname.includes('contact') ? 'active' : ''}
            >
              Liên hệ
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/login" 
              className={location.pathname.includes('admin') ? 'active' : ''}
            >
              Admin
            </Link>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

