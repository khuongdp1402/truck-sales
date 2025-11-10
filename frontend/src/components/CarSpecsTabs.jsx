import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CarSpecsTabs.css';

const CarSpecsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: 'Thông số kỹ thuật',
      content: {
        image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        specs: [
          { label: 'Công suất', value: '450 HP' },
          { label: 'Động cơ', value: 'V8 Twin-Turbo' },
          { label: 'Tốc độ tối đa', value: '305 km/h' },
          { label: 'Dung tích bình xăng', value: '75L' },
          { label: 'Hộp số', value: '8 cấp tự động' },
          { label: 'Dẫn động', value: 'AWD' },
        ]
      }
    },
    {
      id: 1,
      label: 'Màu sắc',
      content: {
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        colors: [
          { name: 'Đen bóng', hex: '#000000' },
          { name: 'Trắng ngọc trai', hex: '#F5F5F5' },
          { name: 'Xám bạc', hex: '#808080' },
          { name: 'Xanh đậm', hex: '#1E3A8A' },
          { name: 'Đỏ sang trọng', hex: '#DC2626' },
          { name: 'Vàng vàng', hex: '#FBBF24' },
        ]
      }
    },
    {
      id: 2,
      label: 'Dòng xe',
      content: {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        variants: [
          { name: 'Luxury', price: '$75,000', features: ['Nội thất da cao cấp', 'Hệ thống âm thanh Premium', 'Ghế massage'] },
          { name: 'Sport', price: '$85,000', features: ['Động cơ tăng áp', 'Hệ thống treo thể thao', 'Phanh carbon-ceramic'] },
          { name: 'Hybrid', price: '$90,000', features: ['Công nghệ hybrid', 'Tiết kiệm nhiên liệu', 'Giảm phát thải'] },
          { name: 'Performance', price: '$100,000', features: ['Hiệu suất tối đa', 'Aerodynamics nâng cao', 'Track mode'] },
        ]
      }
    }
  ];

  return (
    <section className="car-specs-section section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Khám phá <span>chi tiết xe</span>
        </motion.h2>

        <div className="specs-container">
          <div className="specs-content">
            {/* Image Column */}
            <motion.div
              className="specs-image-column"
              key={activeTab}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={tabs[activeTab].content.image} 
                alt={tabs[activeTab].label}
                className="specs-image"
              />
            </motion.div>

            {/* Tabs Column */}
            <div className="specs-tabs-column">
              <div className="tabs-header">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`tab-button ${activeTab === index ? 'active' : ''}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="tab-content"
                >
                  {activeTab === 0 && (
                    <div className="specs-list">
                      {tabs[0].content.specs.map((spec, index) => (
                        <div key={index} className="spec-item">
                          <span className="spec-label">{spec.label}</span>
                          <span className="spec-value">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="colors-list">
                      {tabs[1].content.colors.map((color, index) => (
                        <div key={index} className="color-item">
                          <div 
                            className="color-circle" 
                            style={{ backgroundColor: color.hex }}
                          ></div>
                          <span className="color-name">{color.name}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="variants-list">
                      {tabs[2].content.variants.map((variant, index) => (
                        <div key={index} className="variant-item">
                          <div className="variant-header">
                            <h3 className="variant-name">{variant.name}</h3>
                            <span className="variant-price">{variant.price}</span>
                          </div>
                          <ul className="variant-features">
                            {variant.features.map((feature, fIndex) => (
                              <li key={fIndex}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarSpecsTabs;

