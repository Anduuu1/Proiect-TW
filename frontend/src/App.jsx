import { useEffect, useState } from "react";
import TaskList from "./components/TaskList.jsx";
import { fetchActivitati } from "./api.js";

// Voluntari disponibili și target
const VOLUNTARI_LIBERI = 12;
const TARGET_VOLUNTARI = 100;

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [activitati, setActivitati] = useState([]);
  const [tema, setTema] = useState(temaInitiala);

  // Stările încărcării datelor
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Încărcarea activităților de la API
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

    // Curățarea efectului
    return () => {
      ignore = true;
    };
  }, []);

  // Bifarea / debifarea unei activități
  function handleToggle(id) {
    setActivitati((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, gata: !t.gata } : t
      )
    );
  }

  // Ștergerea unei activități
  function handleDelete(id) {
    setActivitati((prev) =>
      prev.filter((t) => t.id !== id)
    );
  }

  // Dark / Light Mode
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";

    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  // Numărul activităților active
  const active = activitati.filter((t) => !t.gata).length;

  // Progres voluntari
  const progresVoluntari = Math.min(
    (VOLUNTARI_LIBERI / TARGET_VOLUNTARI) * 100,
    100
  );

  return (
    <>
      <header className="app-header">

        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>

        <h1>
          <svg
            className="app-logo-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          UniHub
        </h1>

        <p>
          Gestionează evenimentele și proiectele asociației studențești.
        </p>

        {/* Statistici header */}
        <div className="header-stats">

          <p className="app-count">
            {activitati.length} activități, dintre care {active} în derulare
          </p>

          {/* Voluntari liberi */}
          <div className="app-count volunteer-count">
            <div className="volunteer-info">

              <div className="volunteer-title">
                <span className="volunteer-status-dot"></span>

                <strong>
                  {VOLUNTARI_LIBERI}/{TARGET_VOLUNTARI}
                </strong>

                <span>voluntari liberi</span>
              </div>

              <span className="volunteer-status">
                Liberi acum
              </span>

              <div
                className="volunteer-progress"
                role="progressbar"
                aria-valuenow={VOLUNTARI_LIBERI}
                aria-valuemin="0"
                aria-valuemax={TARGET_VOLUNTARI}
                aria-label="Progres voluntari liberi"
              >
                <div
                  className="volunteer-progress-fill"
                  style={{
                    width: `${progresVoluntari}%`
                  }}
                ></div>
              </div>

              <span className="volunteer-target">
                Target: {TARGET_VOLUNTARI} voluntari
                ({Math.round(progresVoluntari)}%)
              </span>

            </div>
          </div>
        </div>
      </header>

      {/* Buton Refresh - stânga jos */}
      <button
        className="refresh-button"
        onClick={() => window.location.reload()}
        title="Reîmprospătează pagina"
        aria-label="Refresh"
      >
        ↻
      </button>

      <main className="container">
        <section className="panel">

          <h2>Activitățile noastre</h2>

          {/* Starea de încărcare */}
          {loading && (
            <p className="info">
              Se încarcă activitățile UniHub...
            </p>
          )}

          {/* Starea de eroare */}
          {error && (
            <p className="error">
              Nu am putut încărca activitățile: {error}.
              Verifică dacă serverul API este pornit cu{" "}
              <code>npm run api</code>.
            </p>
          )}

          {/* Afișarea activităților */}
          {!loading && !error && (
            <TaskList
              activitati={activitati}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}

        </section>
      </main>

      <footer className="app-footer">
        <div className="panda-container">

          <span
            className="panda-icon"
            role="img"
            aria-label="Panda"
          >
            🐼
          </span>

          <p>UniHub - Asociație Studențească</p>

        </div>
      </footer>
    </>
  );
}
