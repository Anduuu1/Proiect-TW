import { Link } from "react-router-dom";
import { ETICHETE_PRIORITATE } from "../constants.js";
import styles from "./TaskCard.module.css";

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <li
      className={task.gata ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={task.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={task.gata}
          onChange={() => onToggle(task.id)}
          aria-label={`Marchează ${task.titlu}`}
          data-testid="item-toggle"
        />

        <div>
          <Link
            to={`/activitati/${task.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {task.titlu}
          </Link>

          <span className={`badge badge-${task.prioritate}`}>
            Prioritate {ETICHETE_PRIORITATE[task.prioritate]}
          </span>
        </div>
      </div>

      <button
        className="btn-danger"
        onClick={() => onDelete(task.id)}
        aria-label={`Șterge ${task.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}
