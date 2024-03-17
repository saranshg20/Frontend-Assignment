import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Metrics from "./pages/Metrics";
import Logs from "./pages/Logs";
import { useState } from "react";
import { getTimeStamps } from "./utils/utils";

/**
 * The main component of the application.
 * Renders the routes for different pages.
 */
export default function App() {
    const [duration, setDuration] = useState("0");
    const timeStamps = getTimeStamps(duration);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/metrics" />} />
                <Route
                    path="/metrics"
                    element={
                        <Metrics
                            duration={duration}
                            setDuration={setDuration}
                        />
                    }
                />
                <Route
                    path="/logs"
                    element={
                        <Logs
                            duration={duration}
                            setDuration={setDuration}
                            timeStamps={timeStamps}
                        />
                    }
                />
                <Route
                    path="/storybook"
                    Component={() => {
                        window.location.href =
                            "https://www.chromatic.com/library?appId=65f6b59135ae842991897cd1";
                        return null;
                    }}
                />
            </Routes>
        </BrowserRouter>
    );
}
