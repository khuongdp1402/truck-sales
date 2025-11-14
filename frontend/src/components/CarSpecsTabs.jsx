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
        image: 'https://kimlongmotor.com.vn/images/san_pham/bus/Web_-_KLM.jpg',
        specs: [
          { label: 'Tải trọng', value: '1.2 - 3.5 tấn' },
          { label: 'Động cơ', value: 'Diesel 2.5L - 4.0L' },
          { label: 'Công suất', value: '120 - 180 HP' },
          { label: 'Dung tích bình xăng', value: '80L - 150L' },
          { label: 'Hộp số', value: '5-6 cấp' },
          { label: 'Tiêu thụ nhiên liệu', value: '8-12L/100km' },
        ]
      }
    },
    {
      id: 1,
      label: 'Màu sắc',
      content: {
        image: 'https://kimlongmotor.com.vn/images/hinh_anh/WEB-1114-moi.jpg',
        colors: [
          { name: 'Trắng', hex: '#FFFFFF' },
          { name: 'Xám bạc', hex: '#808080' },
          { name: 'Xanh dương', hex: '#1E3A8A' },
          { name: 'Đỏ', hex: '#DC2626' },
          { name: 'Vàng', hex: '#FBBF24' },
        ]
      }
    },
    {
      id: 2,
      label: 'Dòng xe',
      content: {
        image: 'https://kimlongmotor.com.vn/images/san_pham/bus/Web_-_KLM.jpg',
        variants: [
          { name: 'Xe tải nhỏ', price: '$38,000 - $45,000', features: ['Tải trọng 1.2 tấn', 'Tiết kiệm nhiên liệu', 'Phù hợp đô thị'] },
          { name: 'Xe tải trung', price: '$52,000 - $68,000', features: ['Tải trọng 2.1 tấn', 'Động cơ mạnh mẽ', 'Thùng hàng rộng'] },
          { name: 'Xe tải lớn', price: '$75,000', features: ['Tải trọng 3.5 tấn', 'Cabin tiện nghi', 'Hệ thống phanh ABS'] },
          { name: 'Xe khách', price: '$55,000 - $125,000', features: ['29-45 chỗ ngồi', 'Nội thất sang trọng', 'Điều hòa & WiFi'] },
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

