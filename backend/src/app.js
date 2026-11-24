import express from "express";
import cors from "cors";
import activitatiRouter from "./routes/activitati.js";

const app = express();

// CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  })
);

// Citirea JSON
app.use(express.json());

// Verificarea serverului
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Rutele activităților
app.use("/activitati", activitatiRouter);

// Ruta 404
app.use((req, res) => {
  res.status(404).json({
    error: "Ruta nu există.",
  });
});

// Tratarea centralizată a erorilor
app.use((err, req, res, next) => {
  console.error(err);

  const status = err.status || 500;

  res.status(status).json({
    error:
      status === 500
        ? "Eroare internă a serverului."
        : err.message,
  });
});

export default app;
