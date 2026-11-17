import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const VOLUNTARI_LIBERI = 12;
const TARGET_VOLUNTARI = 100;

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Layout() {
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
  }, [tema]);

  function handleTema() {
    setTema((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const progresVoluntari = Math.min(
    (VOLUNTARI_LIBERI / TARGET_VOLUNTARI) * 100,
    100
  );

  return (
    <>
      <header className={styles.header}>
        <button
          className={styles.themeToggle}
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>

        <h1>
          <svg
            className={styles.logo}
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

        <div className={styles.stats}>
          <div className={`${styles.count} ${styles.volunteer}`}>
            <div className={styles.volunteerInfo}>
              <div className={styles.volunteerTitle}>
                <span className={styles.statusDot}></span>
                <strong>
                  {VOLUNTARI_LIBERI}/{TARGET_VOLUNTARI}
                </strong>
                <span>voluntari liberi</span>
              </div>

              <span className={styles.status}>Liberi acum</span>

              <div
                className={styles.progress}
                role="progressbar"
                aria-valuenow={VOLUNTARI_LIBERI}
                aria-valuemin="0"
                aria-valuemax={TARGET_VOLUNTARI}
                aria-label="Progres voluntari liberi"
              >
                <div
                  className={styles.progressFill}
                  style={{ width: `${progresVoluntari}%` }}
                ></div>
              </div>

              <span className={styles.target}>
                Target: {TARGET_VOLUNTARI} voluntari (
                {Math.round(progresVoluntari)}%)
              </span>
            </div>
          </div>
        </div>
      </header>

      <nav className={styles.nav} data-testid="nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ""}>
          Activități
        </NavLink>

        <NavLink to="/despre" className={({ isActive }) => isActive ? styles.active : ""}>
          Despre
        </NavLink>
      </nav>

      <button
        className={styles.refresh}
        onClick={() => window.location.reload()}
        title="Reîmprospătează pagina"
        aria-label="Refresh"
      >
        ↻
      </button>

      <Outlet />

      <footer className={styles.footer}>
        <div className={styles.pandaContainer}>
          <span className={styles.panda} role="img" aria-label="Panda">
            🐼
          </span>
          <p>UniHub - Asociație Studențească</p>
        </div>
      </footer>
    </>
  );
}
