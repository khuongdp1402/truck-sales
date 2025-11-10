import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only - no actual authentication
    if (formData.username && formData.password) {
      alert('Demo only - Login successful! Redirecting to admin panel...');
      navigate('/admin/cars');
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Admin Login</h1>
          <p className="login-subtitle">Đăng nhập vào hệ thống quản trị</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nhập tên đăng nhập"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Nhập mật khẩu"
                required
              />
            </div>
            
            <button type="submit" className="btn-primary login-btn">
              Đăng nhập
            </button>
          </form>
          
          <p className="login-note">
            Demo: Nhập bất kỳ thông tin nào để tiếp tục
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

