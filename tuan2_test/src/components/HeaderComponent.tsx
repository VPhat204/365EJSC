import { Link } from "react-router-dom";

interface HeaderProps {
  username: string | null;
  onLogout: () => void;
}

function Header({ username, onLogout }: HeaderProps) {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>Todo App</h1>
        <nav style={{ display: "flex", alignItems: "center" }}>
          {!username && <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>}
        </nav>
        {username && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>{username}</span>
            <button onClick={onLogout} style={styles.logoutBtn}>Đăng xuất</button>
          </div>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: { backgroundColor: "#4CAF50", color: "white", padding: "10px 0" },
  container: { maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" },
  logo: { margin: 0, fontSize: "24px", fontWeight: "bold" },
  link: { color: "white", marginLeft: "15px", textDecoration: "none", fontWeight: "bold" },
  logoutBtn: { backgroundColor: "white", color: "#4CAF50", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" },
};

export default Header;
