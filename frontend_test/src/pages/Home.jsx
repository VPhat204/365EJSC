import { Link } from "react-router-dom";

function Home() {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    card: {
      background: "#fdfdfd",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    title: {
      fontSize: "28px",
      marginBottom: "15px",
      color: "#333",
    },
    subtitle: {
      fontSize: "18px",
      marginBottom: "20px",
      color: "#666",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      background: "#4CAF50",
      color: "#fff",
      cursor: "pointer",
      margin: "10px",
      textDecoration: "none", 
      display: "inline-block",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}> Chào mừng đến với Notebook </h2>
        <p style={styles.subtitle}>
          Ứng dụng giúp bạn quản lý ghi chú hằng ngày một cách dễ dàng và hiệu quả.
        </p>
        <div>
          <Link
            to="/about"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.background = "#45a049")}
            onMouseOut={(e) => (e.target.style.background = "#4CAF50")}
          >
            ➕ Về chúng tôi
          </Link>
          <Link
            to="/notebook"
            style={{ ...styles.button, background: "#2196F3" }}
            onMouseOver={(e) => (e.target.style.background = "#1976D2")}
            onMouseOut={(e) => (e.target.style.background = "#2196F3")}
          >
            📖 Tạo NoteBook
          </Link>
          <Link
            to="/study"
            style={{ ...styles.button, background: "#FF9800" }}
            onMouseOver={(e) => (e.target.style.background = "#F57C00")}
            onMouseOut={(e) => (e.target.style.background = "#FF9800")}
          >
            📖 Tạo Lịch Học
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
