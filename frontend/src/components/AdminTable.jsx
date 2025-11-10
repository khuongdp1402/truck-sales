import './AdminTable.css';

const AdminTable = ({ data, columns, onEdit, onDelete }) => {
  return (
    <div className="admin-table-container">
      <table className="admin-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
            {(onEdit || onDelete) && <th>Thao tác</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td className="action-cells">
                  {onEdit && (
                    <button 
                      className="btn-edit"
                      onClick={() => onEdit(row)}
                    >
                      Sửa
                    </button>
                  )}
                  {onDelete && (
                    <button 
                      className="btn-delete"
                      onClick={() => onDelete(row)}
                    >
                      Xóa
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="empty-state">
          <p>Không có dữ liệu</p>
        </div>
      )}
    </div>
  );
};

export default AdminTable;

