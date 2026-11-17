import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="container">
      <section className="panel" data-testid="not-found">
        <h2>404 – Pagina nu a fost găsită</h2>
        <p>Ne pare rău, pagina pe care o cauți nu există.</p>
        <Link to="/">Înapoi la activități</Link>
      </section>
    </main>
  );
}
