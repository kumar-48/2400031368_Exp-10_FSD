const { useState } = React;

function App() {
  const [form, setForm] = useState({ id: "", name: "", subject: "" });
  const [students, setStudents] = useState([
    { id: "101", name: "Aditi Sharma", subject: "Mathematics" },
    { id: "102", name: "Manish Gupta", subject: "Physics" },
    { id: "103", name: "Sneha Verma", subject: "Chemistry" },
    { id: "104", name: "Aakash Mehta", subject: "Computer Science" },
    { id: "105", name: "Priya Nair", subject: "Biology" },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const addStudent = (e) => {
    e.preventDefault();
    if (!form.id.trim() || !form.name.trim() || !form.subject.trim()) return;

    if (students.some((s) => s.id === form.id.trim())) {
      alert("Student ID already exists.");
      return;
    }

    setStudents((prev) => [...prev, { ...form }]);
    setForm({ id: "", name: "", subject: "" });
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="student-app">
      <h1>Student Management (useState object)</h1>
      <p>Use state object array with add/delete updates in real time.</p>

      <form className="form-grid" onSubmit={addStudent}>
        <input
          name="id"
          placeholder="Student ID"
          value={form.id}
          onChange={handleChange}
        />
        <input
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
        />
        <button className="add-btn" type="submit">
          Add Student
        </button>
      </form>

      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.subject}</td>
              <td>
                <button className="delete-btn" onClick={() => deleteStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);