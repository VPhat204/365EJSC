import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
import { useAuth } from "../../store/useAuth";

const BASE_URL = "https://68ef4da1b06cc802829cd64a.mockapi.io";

const AdminPage = () => {
  const { logout, user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });
  const [searchTerm, setSearchTerm] = useState(""); 

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/users`);
      setUsers(data);
    } catch (error) {
      console.error("Lỗi tải danh sách người dùng:", error);
      alert("Lỗi tải danh sách người dùng");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Xóa tài khoản này?")) {
      await axios.delete(`${BASE_URL}/users/${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  const handleEdit = (user) => setEditingUser(user);

  const handleSave = async () => {
    await axios.put(`${BASE_URL}/users/${editingUser.id}`, editingUser);
    setUsers((prev) =>
      prev.map((u) => (u.id === editingUser.id ? editingUser : u))
    );
    setEditingUser(null);
    alert("Cập nhật thành công!");
  };

  const handleAddUser = async () => {
    if (!newUser.email || !newUser.password || !newUser.username) {
      alert("Nhập đầy đủ thông tin!");
      return;
    }

    const { data } = await axios.post(`${BASE_URL}/users`, newUser);
    setUsers((prev) => [...prev, data]);
    setNewUser({ username: "", email: "", password: "", role: "user" });
    alert("Thêm tài khoản thành công!");
  };

  // 🔍 Lọc người dùng theo tên
  const filteredUsers = users.filter((u) =>
    u.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-layout">
      <aside className="admin-sidenav">
        <div>
          <div className="sidenav-header">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Logo"
              className="sidenav-logo"
            />
            <h3 className="sidenav-title">
              Admin<span>Panel</span>
            </h3>
          </div>

          <nav className="sidenav-menu">
            <div className="active">Quản lý tài khoản</div>
            <a href="/">Trang người dùng</a>
          </nav>
        </div>

        <div className="sidenav-footer">
          <p>Xin chào, {user?.username || "Admin"}</p>
          <button className="logout-btn" onClick={logout}>
            Đăng xuất
          </button>
        </div>
      </aside>

      <main className="admin-content">
        <header className="admin-navbar">
          <h2>👑 Quản lý tài khoản</h2>
          <div className="navbar-right">
            <input
              type="text"
              placeholder="Tìm kiếm người dùng..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button className="icon-btn">🔍</button>
          </div>
        </header>

        <div className="add-user-form">
          <h3>➕ Thêm tài khoản</h3>
          <input
            placeholder="Tên người dùng"
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />
          <input
            placeholder="Email"
            value={newUser.email}
            onChange={(e) =>
              setNewUser({ ...newUser, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
          <select
            value={newUser.role}
            onChange={(e) =>
              setNewUser({ ...newUser, role: e.target.value })
            }
          >
            <option value="user">Người dùng</option>
            <option value="admin">Admin</option>
          </select>
          <button onClick={handleAddUser}>Thêm</button>
        </div>

        {loading ? (
          <p>Đang tải danh sách...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Role</th>
                <th>Mật khẩu</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>
                      {editingUser?.id === u.id ? (
                        <input
                          value={editingUser.username}
                          onChange={(e) =>
                            setEditingUser({
                              ...editingUser,
                              username: e.target.value,
                            })
                          }
                        />
                      ) : (
                        u.username
                      )}
                    </td>
                    <td>{u.email}</td>
                    <td>
                      {editingUser?.id === u.id ? (
                        <select
                          value={editingUser.role}
                          onChange={(e) =>
                            setEditingUser({
                              ...editingUser,
                              role: e.target.value,
                            })
                          }
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      ) : (
                        u.role
                      )}
                    </td>
                    <td>{u.password}</td>
                    <td>
                      {editingUser?.id === u.id ? (
                        <>
                          <button onClick={handleSave}>💾 Lưu</button>
                          <button onClick={() => setEditingUser(null)}>❌</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => handleEdit(u)}>✏️</button>
                          <button onClick={() => handleDelete(u.id)}>🗑️</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center", color: "#9ca3af" }}>
                    Không tìm thấy người dùng nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default AdminPage;
