import { useEffect, useState } from "react";
import TaskList from "../components/TaskList.jsx";
import TaskForm from "../components/TaskForm.jsx";
import styles from "./TaskuriPage.module.css";
import {
  createActivitate,
  deleteActivitate,
  fetchActivitati,
  updateActivitate,
} from "../api.js";

export default function TaskuriPage() {
  const [activitati, setActivitati] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchActivitati();

        if (!ignore) {
          setActivitati(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(activitate) {
    const creata = await createActivitate(activitate);
    setActivitati((prev) => [...prev, creata]);
  }

  async function handleToggle(id) {
    const activitate = activitati.find((a) => a.id === id);

    if (!activitate) return;

    try {
      const actualizata = await updateActivitate(id, {
        gata: !activitate.gata,
      });

      setActivitati((prev) =>
        prev.map((a) => (a.id === id ? actualizata : a))
      );

      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteActivitate(id);

      setActivitati((prev) => prev.filter((a) => a.id !== id));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }

  const active = activitati.filter((a) => !a.gata).length;

  return (
    <main className={`container ${styles.taskuriContainer}`}>
      <section className="panel">
        <h2>Adaugă activitate</h2>
        <TaskForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>Activitățile noastre</h2>

        <p className="app-count">
          {activitati.length} activități, dintre care {active} în derulare
        </p>

        {loading && (
          <p className="info" data-testid="loading">
            Se încarcă activitățile UniHub...
          </p>
        )}

        {error && (
          <p className="error" data-testid="error">
            Nu am putut efectua operația: {error}.
            Verifică dacă serverul API este pornit cu{" "}
            <code>npm run api</code>.
          </p>
        )}

        {!loading && (
          <TaskList
            activitati={activitati}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </section>
    </main>
  );
}
