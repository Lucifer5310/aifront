import React, { useEffect, useRef } from "react";
import type { User } from "../types/User";
import styles from "../styles/UserModal.module.css";
import Button from "./Button";

interface UserModalProps {
  user: User;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const mapUrl = `https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`;

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={handleOverlayClick}
      data-testid="modal-overlay"
    >
      <div className={styles.modal} tabIndex={-1}>
        <Button
          className={styles.closeBtn}
          variant="ghost"
          size="sm"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </Button>
        <h2 className={styles.title}>{user.name}</h2>
        <div className={styles.section}>
          <strong>ID:</strong> {user.id}
        </div>
        <div className={styles.sectionGrid}>
          <div>
            <strong>Username:</strong> {user.username}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
        </div>
        <div className={styles.section}>
          <strong>Address:</strong>
          <div className={styles.address}>
            {user.address.street}, {user.address.suite}, {user.address.city},{" "}
            {user.address.zipcode}
            <br />
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              View on Map
            </a>
          </div>
        </div>
        <div className={styles.sectionGrid}>
          <div>
            <strong>Phone:</strong> {user.phone}
          </div>
          <div>
            <strong>Website:</strong>{" "}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {user.website}
            </a>
          </div>
        </div>
        <div className={styles.section}>
          <strong>Company:</strong>
          <div>
            {user.company.name}
            <br />
            <span className={styles.companyDetail}>
              {user.company.catchPhrase}
            </span>
            <br />
            <span className={styles.companyDetail}>{user.company.bs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
