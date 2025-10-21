import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/vmovie.png";
import { useAuth } from "../../store/useAuth";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [newName, setNewName] = useState("");
  const auth = useAuth();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowGenre(false);
        setShowCountry(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleUpdateName = async () => {
    if (newName.trim()) {
      await auth.updateUsername(newName.trim());
      setNewName("");
      setEditingName(false);
      setShowMenu(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Tìm kiếm phim, diễn viên..."
            className="search-input"
          />
        </div>
      </div>

      <nav className="nav" ref={dropdownRef}>
        <a href="/">Trang Chủ</a>
        <a href="/danh-sach">Danh sách</a>

        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => {
              setShowGenre(!showGenre);
              setShowCountry(false);
            }}
          >
            Thể Loại <IoIosArrowDown />
          </button>

          {showGenre && (
            <div className="dropdown-menu-nav">
              <div className="dropdown-menu-div">
                <div>
                  <a href="/the-loai/hanh-dong">Hành động</a>
                  <a href="/the-loai/tinh-cam">Tình cảm</a>
                  <a href="/the-loai/kinh-di">Kinh dị</a>
                  <a href="/the-loai/hoat-hinh">Hoạt hình</a>
                  <a href="/the-loai/hai">Hài</a>
                </div>
                <div>
                  <a href="/the-loai/chien-tranh">Chiến tranh</a>
                  <a href="/the-loai/giat-gan">Giật gân</a>
                  <a href="/the-loai/phieu-luu">Phiêu lưu</a>
                  <a href="/the-loai/viễn-tưởng">Viễn tưởng</a>
                  <a href="/the-loai/tam-ly">Tâm lý</a>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => {
              setShowCountry(!showCountry);
              setShowGenre(false);
            }}
          >
            Quốc Gia <IoIosArrowDown />
          </button>

          {showCountry && (
            <div className="dropdown-menu-nav">
              <div className="dropdown-menu-div">
                <div>
                  <a href="/the-loai/chien-tranh"> Việt Nam</a>
                  <a href="/the-loai/giat-gan">Trung Quốc</a>
                  <a href="/the-loai/phieu-luu">Nhật Bản</a>
                  <a href="/the-loai/viễn-tưởng">Hàn Quốc</a>
                  <a href="/the-loai/tam-ly">Đài Loan</a>
                </div>
                <div>
                  <a href="/the-loai/chien-tranh">Hồng Kông</a>
                  <a href="/the-loai/giat-gan">Mỹ</a>
                  <a href="/the-loai/phieu-luu">Anh</a>
                </div>
              </div>
            </div>
          )}
        </div>

        <Link to="">Năm</Link>
      </nav>

      <div className="header-right">
        {!auth.user ? (
          <button className="login-btn">
            <FaUser />
            <a className="login-style" href="/login">
              Đăng nhập
            </a>
          </button>
        ) : (
          <div className="user-dropdown">
            <button className="user-btn" onClick={() => setShowMenu(!showMenu)}>
              <FaUser />
              <span>{auth.user.username}</span>
              <IoIosArrowDown />
            </button>

            {showMenu && (
              <div className="dropdown-menu">
                {editingName ? (
                  <>
                    <input
                      type="text"
                      placeholder="Tên mới..."
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                    <button onClick={handleUpdateName}>Lưu</button>
                    <button onClick={() => setEditingName(false)}>Hủy</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setEditingName(true)}>Đổi tên</button>
                    <button onClick={auth.logout}>Đăng xuất</button>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
