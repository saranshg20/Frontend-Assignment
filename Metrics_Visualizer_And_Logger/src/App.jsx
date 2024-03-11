import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Metrics from "./pages/Metrics";
import Logs from "./pages/Logs";
import { useState } from "react";

export default function App() {
  const [duration, setDuration] = useState("5");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/metrics" element={<Metrics duration={duration} setDuration={setDuration} />} />
        <Route path="/logs" element={<Logs duration={duration} setDuration={setDuration} />} />
      </Routes>
    </BrowserRouter>
  )
}