// Toate cererile HTTP pentru UniHub stau aici.
export const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Funcție comună pentru cererile către server
async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    // Citim mesajul de eroare trimis de Express
    const body = await res.json().catch(() => ({}));

    throw new Error(body.error || `Eroare server: ${res.status}`);
  }

  // DELETE poate returna 204 fără conținut
  return res.status === 204 ? null : res.json();
}

// Citirea tuturor activităților
export function fetchActivitati() {
  return request("/activitati");
}

// Citirea unei singure activități după ID
export function fetchActivitate(id) {
  return request(`/activitati/${id}`);
}

// Adăugarea unei activități
export function createActivitate(activitate) {
  return request("/activitati", {
    method: "POST",
    body: JSON.stringify(activitate),
  });
}

// Modificarea unei activități
export function updateActivitate(id, changes) {
  return request(`/activitati/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

// Ștergerea unei activități
export function deleteActivitate(id) {
  return request(`/activitati/${id}`, {
    method: "DELETE",
  });
}
