const activitati = [
  { id: 1, titlu: "Atelier de React", gata: false, prioritate: "mare" },
  { id: 2, titlu: "Hackathon CodeSprint", gata: true, prioritate: "medie" },
  { id: 3, titlu: "Seara de board games", gata: false, prioritate: "mica" }
];

import TaskList from "./components/TaskList.jsx";

export default function App() {
  const inDerulare = activitati.filter((t) => !t.gata).length;

  return (
    <>
      <header className="app-header">
        <h1>UniHub</h1>
        <p>Gestionează evenimentele și proiectele asociației studențești.</p>
        <p className="app-count">
          {activitati.length} activități, dintre care {inDerulare} în derulare
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Activitățile noastre</h2>
          <TaskList activitati={activitati} />
        </section>
      </main>
    </>
  );
}