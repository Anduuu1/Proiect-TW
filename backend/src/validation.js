export const PRIORITATI = ["mica", "medie", "mare"];

const TITLU_MAX = 100;

export function valideazaActivitate(body = {}, { partial = false } = {}) {
  const erori = [];
  const date = {};

  // Validarea titlului
  if (!partial || body.titlu !== undefined) {
    const titlu =
      typeof body.titlu === "string" ? body.titlu.trim() : "";

    if (!titlu) {
      erori.push("Titlul este obligatoriu.");
    } else if (titlu.length > TITLU_MAX) {
      erori.push(`Titlul poate avea maximum ${TITLU_MAX} de caractere.`);
    } else {
      date.titlu = titlu;
    }
  }

  // Validarea priorității
  if (!partial || body.prioritate !== undefined) {
    const prioritate = body.prioritate ?? "medie";

    if (!PRIORITATI.includes(prioritate)) {
      erori.push(
        `Prioritatea trebuie să fie una dintre: ${PRIORITATI.join(", ")}.`
      );
    } else {
      date.prioritate = prioritate;
    }
  }

  // Validarea stării
  if (body.gata !== undefined) {
    if (typeof body.gata !== "boolean") {
      erori.push("Starea trebuie să fie true sau false.");
    } else {
      date.gata = body.gata;
    }
  } else if (!partial) {
    date.gata = false;
  }

  return { erori, date };
}

export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}
