import AdminTable from '../../components/AdminTable';
import { contacts } from '../../mock/contacts';
import './ContactsManager.css';

const ContactsManager = () => {
  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Họ tên' },
    { key: 'phone', header: 'Số điện thoại' },
    { key: 'message', header: 'Tin nhắn' },
    { key: 'date', header: 'Ngày' },
    {
      key: 'status',
      header: 'Trạng thái',
      render: (value) => {
        const statusMap = {
          new: { text: 'Mới', class: 'status-new' },
          contacted: { text: 'Đã liên hệ', class: 'status-contacted' },
          scheduled: { text: 'Đã đặt lịch', class: 'status-scheduled' }
        };
        const status = statusMap[value] || { text: value, class: '' };
        return <span className={`status-badge ${status.class}`}>{status.text}</span>;
      }
    }
  ];

  const handleEdit = (contact) => {
    alert(`Demo only - Edit contact: ${contact.name}`);
  };

  const handleDelete = (contact) => {
    if (window.confirm(`Bạn có chắc muốn xóa liên hệ "${contact.name}"?`)) {
      alert('Demo only - Contact deleted');
    }
  };

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header">
          <h1 className="admin-title">Quản lý liên hệ</h1>
        </div>

        <AdminTable
          data={contacts}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default ContactsManager;

