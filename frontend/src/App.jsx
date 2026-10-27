import { useState } from "react";
import TaskList from "./components/TaskList.jsx";

const ACTIVITATI_INITIALE = [
  { id: 1, titlu: "Atelier de React", gata: false, prioritate: "mare" },
  { id: 2, titlu: "Hackathon CodeSprint", gata: true, prioritate: "medie" },
  { id: 3, titlu: "Seara de board games", gata: false, prioritate: "mica" }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [activitati, setActivitati] = useState(ACTIVITATI_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  // Funcție imutabilă pentru bifarea / deznifarea unui task (toggle)
  function handleToggle(id) {
    setActivitati((prev) =>
      prev.map((t) => (t.id === id ? { ...t, gata: !t.gata } : t))
    );
  }

  // Funcție imutabilă pentru ștergerea unui task
  function handleDelete(id) {
    setActivitati((prev) => prev.filter((t) => t.id !== id));
  }

  // Comutator temă Dark / Light
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  // Valoare derivată pentru numărul de activități active
  const active = activitati.filter((t) => !t.gata).length;

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

        <p>Gestionează evenimentele și proiectele asociației studențești.</p>
        <p className="app-count">
          {activitati.length} activități, dintre care {active} în derulare
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Activitățile noastre</h2>
          <TaskList
            activitati={activitati}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>

      <footer className="app-footer">
        <div className="panda-container">
          <span className="panda-icon" role="img" aria-label="Panda">🐼</span>
          <p>UniHub - Asociație Studențească</p>
        </div>
      </footer>
    </>
  );
}