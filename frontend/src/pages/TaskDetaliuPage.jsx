import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchActivitate } from "../api.js";
import { ETICHETE_PRIORITATE } from "../constants.js";

export default function TaskDetaliuPage() {
  const { id } = useParams();

  const [activitate, setActivitate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchActivitate(id);

        if (!ignore) {
          setActivitate(data);
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
  }, [id]);

  return (
    <main className="container">
      <section className="panel">
        <Link to="/">← Înapoi la activități</Link>

        {loading && (
          <p className="info" data-testid="loading">
            Se încarcă detaliile activității...
          </p>
        )}

        {error && (
          <p className="error" data-testid="error">
            Nu am putut găsi activitatea. {error}
          </p>
        )}

        {!loading && !error && activitate && (
          <div data-testid="detail">
            <h2 data-testid="detail-title">{activitate.titlu}</h2>

            <p>
              <strong>ID:</strong> {activitate.id}
            </p>

            <p>
              <strong>Prioritate:</strong>{" "}
              {ETICHETE_PRIORITATE[activitate.prioritate] ??
                activitate.prioritate}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {activitate.gata ? "Finalizată" : "În derulare"}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
