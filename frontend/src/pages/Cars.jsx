import { useState } from 'react';
import { motion } from 'framer-motion';
import CarCard from '../components/CarCard';
import { cars, brands } from '../mock/cars';
import './Cars.css';

const Cars = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredCars = cars.filter((car) => {
    const brandMatch = selectedBrand === 'all' || car.brand === selectedBrand;
    let priceMatch = true;
    
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max) {
        priceMatch = car.price >= min && car.price <= max;
      } else {
        priceMatch = car.price >= min;
      }
    }
    
    return brandMatch && priceMatch;
  });

  return (
    <div className="cars-page">
      <div className="cars-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-title"
          >
            Danh sách xe
          </motion.h1>
        </div>
      </div>

      <section className="cars-section section">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-group">
              <label htmlFor="brand-filter">Thương hiệu:</label>
              <select
                id="brand-filter"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="filter-select"
              >
                <option value="all">Tất cả</option>
                {brands.map((brand) => (
                  <option key={brand.name} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="price-filter">Khoảng giá:</label>
              <select
                id="price-filter"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="filter-select"
              >
                <option value="all">Tất cả</option>
                <option value="0-50000">Dưới $50,000</option>
                <option value="50000-75000">$50,000 - $75,000</option>
                <option value="75000-100000">$75,000 - $100,000</option>
                <option value="100000">Trên $100,000</option>
              </select>
            </div>

            <div className="filter-reset">
              <button
                onClick={() => {
                  setSelectedBrand('all');
                  setPriceRange('all');
                }}
                className="btn-secondary"
              >
                Đặt lại
              </button>
            </div>
          </div>

          <div className="cars-results">
            <p className="results-count">
              Tìm thấy {filteredCars.length} xe
            </p>
          </div>

          <div className="cars-grid">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="no-results">
              <p>Không tìm thấy xe phù hợp với bộ lọc của bạn.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cars;

