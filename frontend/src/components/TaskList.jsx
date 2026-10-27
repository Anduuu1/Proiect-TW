import TaskCard from "./TaskCard.jsx";

export default function TaskList({ activitati, onToggle, onDelete }) {
  if (activitati.length === 0) {
    return <p className="empty">Nu există nicio activitate.</p>;
  }

  return (
    <ul className="task-list">
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