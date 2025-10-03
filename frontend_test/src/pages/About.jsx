function About() {
  const styles = {
    container: { maxWidth: "700px", margin: "40px auto", padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: 1.6 },
    card: { background: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
    title: { fontSize: "22px", marginBottom: "15px" },
    list: { paddingLeft: "20px" }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>ℹ️ Giới thiệu về Notebook</h2>
        <p>
          <b>Notebook App</b> là một ứng dụng đơn giản giúp bạn quản lý các ghi chú hàng ngày một cách tiện lợi.
          Bạn có thể thêm, sửa, xóa và đánh dấu trạng thái cho từng ghi chú.
        </p>
        <h3>✨ Các tính năng chính:</h3>
        <ul style={styles.list}>
          <li>📝 Thêm ghi chú mới với tiêu đề</li>
          <li>✏️ Chỉnh sửa nội dung ghi chú đã có</li>
          <li>❌ Xóa ghi chú không cần thiết</li>
          <li>✅ Đánh dấu trạng thái: Cần làm, Đang làm, Đã xong</li>
          <li>💾 Lưu trữ tự động vào LocalStorage (không mất khi tải lại trang)</li>
        </ul>
      </div>
    </div>
  );
}

export default About;

