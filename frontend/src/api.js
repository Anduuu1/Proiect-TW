// Toate cererile HTTP vor fi realizate din acest fișier.
export const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchActivitati() {
  const res = await fetch(`${API_URL}/activitati`);

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  return res.json();
}
