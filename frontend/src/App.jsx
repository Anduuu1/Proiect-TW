import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout.jsx";
import TaskuriPage from "./pages/TaskuriPage.jsx";
import TaskDetaliuPage from "./pages/TaskDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TaskuriPage />} />
        <Route path="/activitati/:id" element={<TaskDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
