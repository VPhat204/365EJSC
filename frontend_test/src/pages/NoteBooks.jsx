import { useState, useEffect } from "react";
import axios from "axios";

function Notebook() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newStatus, setNewStatus] = useState("todo");
  const [newTag, setNewTag] = useState("work");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [editingTag, setEditingTag] = useState("work");

  const API_URL = "https://68df8ace898434f413580d49.mockapi.io/notes";

  useEffect(() => {
    axios.get(API_URL).then((res) => setNotes(res.data));
  }, []);

  const addNote = async () => {
    if (newNote.trim() === "") return;
    const res = await axios.post(API_URL, {
      title: newNote,
      status: newStatus,
      tag: newTag,
    });
    setNotes([...notes, res.data]);
    setNewNote("");
    setNewStatus("todo");
    setNewTag("work");
  };

  const startEdit = (note) => {
    setEditingId(note.id);
    setEditingText(note.title);
    setEditingTag(note.tag);
  };

  const saveEdit = async (id) => {
    const res = await axios.put(`${API_URL}/${id}`, {
      title: editingText,
      tag: editingTag,
    });
    setNotes(notes.map((n) => (n.id === id ? res.data : n)));
    setEditingId(null);
    setEditingText("");
    setEditingTag("work");
  };

  const deleteNote = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setNotes(notes.filter((n) => n.id !== id));
  };

  const changeStatus = async (id, status) => {
    const res = await axios.put(`${API_URL}/${id}`, { status });
    setNotes(notes.map((n) => (n.id === id ? res.data : n)));
  };

  const styles = {
    container: {
      maxWidth: "95%",
      margin: "20px auto",
      padding: "10px",
      fontFamily: "Arial, sans-serif",
      lineHeight: 1.6,
    },
    card: {
      background: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    form: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "15px",
    },
    input: {
      flex: "1 1 200px",
      padding: "8px 10px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "1rem",
    },
    list: { listStyle: "none", padding: 0, margin: 0 },
    listItem: {
      margin: "8px 0",
      padding: "12px",
      background: "#f9f9f9",
      borderRadius: "8px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "10px",
      boxShadow: "0 1px 5px rgba(0,0,0,0.05)",
    },
    btn: {
      border: "none",
      padding: "8px 12px",
      borderRadius: "6px",
      color: "white",
      cursor: "pointer",
      fontSize: "0.9rem",
    },
    add: { background: "#28a745" },
    edit: { background: "#007bff" },
    delete: { background: "#dc3545" },
    save: { background: "#fd7e14" },
    cancel: { background: "#6c757d" },
    select: {
      padding: "7px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "0.9rem",
    },
    tagBadge: {
      padding: "4px 10px",
      borderRadius: "20px",
      fontSize: "0.8rem",
      fontWeight: "bold",
      color: "white",
      minWidth: "70px",
      textAlign: "center",
    },
    noteTitle: {
      flex: 1,
      fontSize: "1rem",
      minWidth: "150px",
      wordBreak: "break-word",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>📝 My Notebook</h2>

        <div style={styles.form}>
          <input
            type="text"
            placeholder="Nhập ghi chú..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            style={styles.input}
          />
          <select
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            style={styles.select}
          >
            <option value="work">💼 Công việc</option>
            <option value="study">📘 Học tập</option>
            <option value="personal">🏠 Cá nhân</option>
          </select>
          <button style={{ ...styles.btn, ...styles.add }} onClick={addNote}>
            Thêm
          </button>
        </div>

        <ul style={styles.list}>
          {notes.map((note) => (
            <li key={note.id} style={styles.listItem}>
              {editingId === note.id ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    style={styles.input}
                  />
                  <select
                    value={editingTag}
                    onChange={(e) => setEditingTag(e.target.value)}
                    style={styles.select}
                  >
                    <option value="work">💼 Công việc</option>
                    <option value="study">📘 Học tập</option>
                    <option value="personal">🏠 Cá nhân</option>
                  </select>
                  <button
                    style={{ ...styles.btn, ...styles.save }}
                    onClick={() => saveEdit(note.id)}
                  >
                    Lưu
                  </button>
                  <button
                    style={{ ...styles.btn, ...styles.cancel }}
                    onClick={() => setEditingId(null)}
                  >
                    Hủy
                  </button>
                </>
              ) : (
                <>
                  <span style={styles.noteTitle}>{note.title}</span>
                  <span
                    style={{
                      ...styles.tagBadge,
                      background:
                        note.tag === "work"
                          ? "#007bff"
                          : note.tag === "study"
                          ? "#28a745"
                          : "#ffc107",
                    }}
                  >
                    {note.tag === "work"
                      ? "Công việc"
                      : note.tag === "study"
                      ? "Học tập"
                      : "Cá nhân"}
                  </span>
                  <select
                    value={note.status}
                    onChange={(e) => changeStatus(note.id, e.target.value)}
                    style={styles.select}
                  >
                    <option value="todo">⏳ Cần làm</option>
                    <option value="doing">🔔 Đang làm</option>
                    <option value="done">✅ Đã xong</option>
                  </select>
                  <button
                    style={{ ...styles.btn, ...styles.edit }}
                    onClick={() => startEdit(note)}
                  >
                    Sửa
                  </button>
                  <button
                    style={{ ...styles.btn, ...styles.delete }}
                    onClick={() => deleteNote(note.id)}
                  >
                    Xóa
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notebook;
