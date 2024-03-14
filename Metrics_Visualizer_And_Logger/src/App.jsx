import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Metrics from "./pages/Metrics";
import Logs from "./pages/Logs";
import { useEffect, useState } from "react";
import { getTimeStamps } from "./utils/utils";

export default function App() {
  const [duration, setDuration] = useState("0");
  const timeStamps = getTimeStamps(duration);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/metrics" />} />
        <Route path="/metrics" element={<Metrics duration={duration} setDuration={setDuration}/>} />
        <Route path="/logs" element={<Logs duration={duration} setDuration={setDuration} timeStamps={timeStamps}/>} />
      </Routes>
    </BrowserRouter>
  )
}