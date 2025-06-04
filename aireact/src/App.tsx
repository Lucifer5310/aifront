import React, { useEffect, useState } from "react";
import type { User } from "./types/User";
import UserTable from "./components/UserTable";
import UserModal from "./components/UserModal";
import styles from "./styles/App.module.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleRowClick = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleDelete = (id: number) => {
    setDeletingId(id);
    setTimeout(() => {
      setUsers((prev) => prev.filter((u) => u.id !== id));
      setDeletingId(null);
      setToast("User deleted");
      setTimeout(() => setToast(null), 2000);
    }, 500);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>User Management</h1>
      {loading && <div className={styles.spinner}>Loading...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {!loading && !error && (
        <UserTable
          users={users}
          onRowClick={handleRowClick}
          onDelete={handleDelete}
          deletingId={deletingId}
        />
      )}
      {showModal && selectedUser && (
        <UserModal user={selectedUser} onClose={handleCloseModal} />
      )}
      {toast && <div className={styles.toast}>{toast}</div>}
    </div>
  );
};

export default App;
