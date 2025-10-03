import { useState, useEffect } from "react";
import axios from "axios";

function Notebook() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const API_URL = "https://68df87fa898434f413580380.mockapi.io/notes"; 
  useEffect(() => {
    axios.get(API_URL).then((res) => setNotes(res.data));
  }, []);

  const addNote = async () => {
    if (newNote.trim() === "") return;
    const res = await axios.post(API_URL, {
      title: newNote,
      status: "todo",
    });
    setNotes([...notes, res.data]);
    setNewNote("");
  };

  const startEdit = (note) => {
    setEditingId(note.id);
    setEditingText(note.title);
  };

  const saveEdit = async (id) => {
    const res = await axios.put(`${API_URL}/${id}`, {
      title: editingText,
    });
    setNotes(notes.map((n) => (n.id === id ? res.data : n)));
    setEditingId(null);
    setEditingText("");
  };

  const deleteNote = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setNotes(notes.filter((n) => n.id !== id));
  };

  const toggleStatus = async (id, currentStatus) => {
    const nextStatus =
      currentStatus === "todo"
        ? "doing"
        : currentStatus === "doing"
        ? "done"
        : "todo";
    const res = await axios.put(`${API_URL}/${id}`, { status: nextStatus });
    setNotes(notes.map((n) => (n.id === id ? res.data : n)));
  };

  const statusLabel = {
    todo: { text: "⏳ Cần làm", color: "#6c757d" },
    doing: { text: "🔔 Đang làm", color: "#fd7e14" },
    done: { text: "✅ Đã xong", color: "#28a745" },
  };

  const styles = {
    container: { maxWidth: "700px", margin: "40px auto", padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: 1.6 },
    card: { background: "#f9f9f9", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
    form: { display: "flex", gap: "10px", marginBottom: "15px" },
    input: { flex: 1, padding: "6px 8px", border: "1px solid #ccc", borderRadius: "4px" },
    list: { listStyle: "none", padding: 0 },
    listItem: { margin: "8px 0", padding: "10px", background: "#f9f9f9", borderRadius: "6px", display: "flex", alignItems: "center", gap: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
    btn: { border: "none", padding: "6px 10px", borderRadius: "4px", color: "white", cursor: "pointer" },
    add: { background: "#28a745" },
    edit: { background: "#007bff" },
    delete: { background: "#dc3545" },
    save: { background: "#fd7e14" },
    cancel: { background: "#6c757d" },
    statusBtn: { background: "#17a2b8" },
    badge: { padding: "3px 8px", borderRadius: "12px", fontSize: "13px", fontWeight: "bold", color: "white" }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>My Notebook</h2>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Nhập ghi chú..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          style={styles.input}
        />
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
                  <span style={{ flex: 1, fontSize: "15px" }}>{note.title}</span>
                  <span
                    style={{
                      ...styles.badge,
                      background: statusLabel[note.status].color
                    }}
                  >
                    {statusLabel[note.status].text}
                  </span>
                  <button
                    style={{ ...styles.btn, ...styles.statusBtn }}
                    onClick={() => toggleStatus(note.id)}
                  >
                    Đổi trạng thái
                  </button>
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
