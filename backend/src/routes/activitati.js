import { Router } from "express";
import { parseId, valideazaActivitate } from "../validation.js";

const router = Router();

let activitati = [
  {
    id: 1,
    titlu: "Atelier de React",
    gata: false,
    prioritate: "mare",
  },
  {
    id: 2,
    titlu: "Hackathon CodeSprint",
    gata: false,
    prioritate: "medie",
  },
  {
    id: 3,
    titlu: "Seara de board games",
    gata: false,
    prioritate: "mica",
  },
  {
    id: 4,
    titlu: "Workshop de dezvoltare personală",
    gata: false,
    prioritate: "medie",
  },
  {
    id: 5,
    titlu: "Întâlnire comunitate studențească",
    gata: true,
    prioritate: "mica",
  },
];

let nextId = 6;

// Verificarea ID-ului
function gasesteIndex(req, res) {
  const id = parseId(req.params.id);

  if (!id) {
    res.status(400).json({ error: "ID invalid." });
    return -1;
  }

  const index = activitati.findIndex((a) => a.id === id);

  if (index === -1) {
    res.status(404).json({ error: "Activitatea nu există." });
    return -1;
  }

  return index;
}

// GET - toate activitățile
router.get("/", (req, res) => {
  res.json(activitati);
});

// GET - o activitate după ID
router.get("/:id", (req, res) => {
  const index = gasesteIndex(req, res);

  if (index === -1) return;

  res.json(activitati[index]);
});

// POST - adaugă activitate
router.post("/", (req, res) => {
  console.log("BODY PRIMIT:", req.body);

  const { erori, date } = valideazaActivitate(req.body ?? {});

  console.log("ERORI VALIDARE:", erori);
  console.log("DATE VALIDATE:", date);

  if (erori.length > 0) {
    return res.status(400).json({
      error: erori.join("; "),
    });
  }

  const activitate = {
    id: nextId++,
    ...date,
  };

  activitati.push(activitate);

  res.status(201).json(activitate);
});

// PATCH - modifică activitate
router.patch("/:id", (req, res) => {
  const index = gasesteIndex(req, res);

  if (index === -1) return;

  const { erori, date } = valideazaActivitate(req.body ?? {}, {
    partial: true,
  });

  if (erori.length > 0) {
    return res.status(400).json({
      error: erori.join("; "),
    });
  }

  activitati[index] = {
    ...activitati[index],
    ...date,
  };

  res.json(activitati[index]);
});

// DELETE - șterge activitate
router.delete("/:id", (req, res) => {
  const index = gasesteIndex(req, res);

  if (index === -1) return;

  activitati.splice(index, 1);

  res.status(204).end();
});

export default router;
