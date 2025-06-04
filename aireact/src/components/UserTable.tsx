import React from "react";
import type { User } from "../types/User";
import styles from "../styles/UserTable.module.css";
import Button from "./Button";

interface UserTableProps {
  users: User[];
  onRowClick: (user: User) => void;
  onDelete: (id: number) => void;
  deletingId: number | null;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  onRowClick,
  onDelete,
  deletingId,
}) => (
  <div className={styles.tableWrapper}>
    <div className={styles.table}>
      <div className={styles.headerRow}>
        <div>Name / Email</div>
        <div>Address</div>
        <div>Phone</div>
        <div>Website</div>
        <div>Company</div>
        <div></div>
      </div>
      {users.map((user) => (
        <div
          key={user.id}
          className={styles.row}
          onClick={() => onRowClick(user)}
          tabIndex={0}
          role="button"
        >
          <div>
            <span className={styles.name}>{user.name}</span>
            <br />
            <span className={styles.email}>{user.email}</span>
          </div>
          <div>
            {user.address.street}, {user.address.city}, {user.address.zipcode}
          </div>
          <div>{user.phone}</div>
          <div>
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={styles.link}
            >
              {user.website}
            </a>
          </div>
          <div>{user.company.name}</div>
          <div>
            <Button
              variant="danger"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                if (
                  window.confirm(
                    `Are you sure you want to delete ${user.name}?`
                  )
                ) {
                  onDelete(user.id);
                }
              }}
              disabled={deletingId === user.id}
            >
              {deletingId === user.id ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UserTable;
