import TaskCard from "./TaskCard.jsx";
import styles from "./TaskList.module.css";

export default function TaskList({ activitati, onToggle, onDelete }) {
  if (activitati.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există nicio activitate.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {activitati.map((activitate) => (
        <TaskCard
          key={activitate.id}
          task={activitate}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
