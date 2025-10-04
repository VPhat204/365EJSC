import { useState, useEffect } from "react";
import axios from "axios";

function StudySchedule() {
  const [schedules, setSchedules] = useState([]);
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [editId, setEditId] = useState(null);

  const API_URL = "https://68df8ace898434f413580d49.mockapi.io/schedules";

  useEffect(() => {
    axios.get(API_URL).then((res) => setSchedules(res.data));
  }, []);

  const addOrUpdateSchedule = async () => {
    if (!subject || !date || !time) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (editId) {
      const res = await axios.put(`${API_URL}/${editId}`, {
        subject,
        date,
        time,
        note,
      });
      setSchedules(schedules.map((s) => (s.id === editId ? res.data : s)));
      setEditId(null);
    } else {
      const res = await axios.post(API_URL, {
        subject,
        date,
        time,
        note,
      });
      setSchedules([...schedules, res.data]);
    }
    setSubject("");
    setDate("");
    setTime("");
    setNote("");
  };

  const deleteSchedule = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setSchedules(schedules.filter((s) => s.id !== id));
  };

  const editSchedule = (schedule) => {
    setEditId(schedule.id);
    setSubject(schedule.subject);
    setDate(schedule.date);
    setTime(schedule.time);
    setNote(schedule.note);
  };

  const sortByDateAsc = () => {
    const sorted = [...schedules].sort(
      (a, b) =>
        new Date(a.date + "T" + a.time) - new Date(b.date + "T" + b.time)
    );
    setSchedules(sorted);
  };

  const sortByDateDesc = () => {
    const sorted = [...schedules].sort(
      (a, b) =>
        new Date(b.date + "T" + b.time) - new Date(a.date + "T" + a.time)
    );
    setSchedules(sorted);
  };

  const sortByNameAsc = () => {
    const sorted = [...schedules].sort((a, b) =>
      a.subject.localeCompare(b.subject, "vi")
    );
    setSchedules(sorted);
  };

  const sortByNameDesc = () => {
    const sorted = [...schedules].sort((a, b) =>
      b.subject.localeCompare(a.subject, "vi")
    );
    setSchedules(sorted);
  };

  const styles = {
    container: { maxWidth: "700px", margin: "30px auto", fontFamily: "Arial" },
    card: { background: "#f8f9fa", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", },
    form: { display: "grid", gap: "10px", marginBottom: "20px" },
    input: { padding: "8px", borderRadius: "5px", border: "1px solid #ccc" },
    btn: {
      padding: "8px 12px",
      border: "none",
      borderRadius: "5px",
      background: "#007bff",
      color: "white",
      cursor: "pointer",
      marginRight: "5px",
    },
    sortBtn: {
      padding: "6px 10px",
      border: "1px solid #007bff",
      borderRadius: "5px",
      background: "white",
      color: "#007bff",
      cursor: "pointer",
      marginRight: "5px",
    },
    list: { listStyle: "none", padding: 0 },
    item: {
      background: "white",
      margin: "8px 0",
      padding: "12px",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },
    deleteBtn: {
      background: "#dc3545",
      color: "white",
      border: "none",
      borderRadius: "5px",
      padding: "6px 10px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>📚 {editId ? "Chỉnh sửa lịch học" : "Tạo Lịch Học"}</h2>
        <div style={styles.form}>
          <input
            type="text"
            placeholder="Môn học..."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={styles.input}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Ghi chú..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={styles.input}
          />
          <button
            style={{
              padding: "8px",
              border: "none",
              borderRadius: "5px",
              background: "#007bff",
              color: "white",
            }}
            onClick={addOrUpdateSchedule}
          >
            {editId ? "💾 Lưu chỉnh sửa" : "➕ Thêm lịch học"}
          </button>
        </div>
        <h3>📅 Danh sách lịch học</h3>
        <div style={{ marginBottom: "15px" }}>
          <button style={styles.sortBtn} onClick={sortByDateAsc}>
            📈 Ngày giờ ↑
          </button>
          <button style={styles.sortBtn} onClick={sortByDateDesc}>
            📉 Ngày giờ ↓
          </button>
          <button style={styles.sortBtn} onClick={sortByNameAsc}>
            🔤 Tên A-Z
          </button>
          <button style={styles.sortBtn} onClick={sortByNameDesc}>
            🔡 Tên Z-A
          </button>
        </div>
        <ul style={styles.list}>
          {schedules.map((s) => (
            <li key={s.id} style={styles.item}>
              <div>
                <b>{s.subject}</b> <br />
                {s.date} ⏰ {s.time}
                <br />
                <i>{s.note}</i>
              </div>
              <div>
                <button
                  style={{
                    marginRight: "8px",
                    background: "#ffc107",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => editSchedule(s)}
                >
                  ✏️ Sửa
                </button>
                <button
                  style={styles.deleteBtn}
                  onClick={() => deleteSchedule(s.id)}
                >
                  Xóa
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudySchedule;
