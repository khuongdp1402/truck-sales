import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CarCard.css';

const CarCard = ({ car }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const calculateDiscountPrice = (price, discount) => {
    if (!discount || discount <= 0) return null;
    return price * (1 - discount / 100);
  };

  const discountPrice = calculateDiscountPrice(car.price, car.discount);
  const hasDiscount = car.discount && car.discount > 0;

  return (
    <motion.div
      className="car-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="car-card-image">
        <img 
          src={car.image || 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} 
          alt={car.name}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
          }}
        />
        {hasDiscount && (
          <div className="car-card-discount-tag">
            <span className="discount-text">-{car.discount}%</span>
          </div>
        )}
        <div className="car-card-overlay">
          <span className="car-brand">{car.brand}</span>
        </div>
      </div>
      <div className="car-card-content">
        <h3 className="car-card-name">{car.name}</h3>
        <p className="car-card-year">Năm: {car.year}</p>
        <div className="car-card-price-container">
          {hasDiscount ? (
            <>
              <p className="car-card-price-old">{formatPrice(car.price)}</p>
              <p className="car-card-price">{formatPrice(discountPrice)}</p>
            </>
          ) : (
            <p className="car-card-price">{formatPrice(car.price)}</p>
          )}
        </div>
        <Link to={`/cars/${car.id}`} className="btn-secondary car-card-btn">
          Chi tiết
        </Link>
      </div>
    </motion.div>
  );
};

export default CarCard;

