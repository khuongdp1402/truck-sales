import { useState } from 'react';
import AdminTable from '../../components/AdminTable';
import { cars } from '../../mock/cars';
import './CarsManager.css';

const CarsManager = () => {
  const [carList, setCarList] = useState(cars);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCar, setEditingCar] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    year: '',
    price: '',
    description: '',
    image: ''
  });

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Tên xe' },
    { key: 'brand', header: 'Thương hiệu' },
    { key: 'year', header: 'Năm' },
    {
      key: 'price',
      header: 'Giá',
      render: (value) => {
        return new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0
        }).format(value);
      }
    }
  ];

  const handleAdd = () => {
    setEditingCar(null);
    setFormData({
      name: '',
      brand: '',
      year: '',
      price: '',
      description: '',
      image: ''
    });
    setShowAddModal(true);
  };

  const handleEdit = (car) => {
    setEditingCar(car);
    setFormData({
      name: car.name,
      brand: car.brand,
      year: car.year.toString(),
      price: car.price.toString(),
      description: car.description,
      image: car.image
    });
    setShowAddModal(true);
  };

  const handleDelete = (car) => {
    if (window.confirm(`Bạn có chắc muốn xóa xe "${car.name}"?`)) {
      setCarList(carList.filter((c) => c.id !== car.id));
      alert('Demo only - Car deleted');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCar) {
      // Update existing car
      setCarList(
        carList.map((car) =>
          car.id === editingCar.id
            ? {
                ...car,
                ...formData,
                year: parseInt(formData.year),
                price: parseFloat(formData.price)
              }
            : car
        )
      );
      alert('Demo only - Car updated');
    } else {
      // Add new car
      const newCar = {
        id: Math.max(...carList.map((c) => c.id)) + 1,
        ...formData,
        year: parseInt(formData.year),
        price: parseFloat(formData.price)
      };
      setCarList([...carList, newCar]);
      alert('Demo only - Car added');
    }
    setShowAddModal(false);
    setFormData({
      name: '',
      brand: '',
      year: '',
      price: '',
      description: '',
      image: ''
    });
  };

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header">
          <h1 className="admin-title">Quản lý xe</h1>
          <button onClick={handleAdd} className="btn-primary">
            + Thêm xe mới
          </button>
        </div>

        <AdminTable
          data={carList}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {showAddModal && (
          <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setShowAddModal(false)}
              >
                ×
              </button>
              <h2>{editingCar ? 'Sửa thông tin xe' : 'Thêm xe mới'}</h2>
              <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                  <label>Tên xe</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Thương hiệu</label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) =>
                      setFormData({ ...formData, brand: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Năm</label>
                  <input
                    type="number"
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Giá</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Mô tả</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>URL hình ảnh</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                  />
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="btn-secondary"
                  >
                    Hủy
                  </button>
                  <button type="submit" className="btn-primary">
                    {editingCar ? 'Cập nhật' : 'Thêm'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsManager;

