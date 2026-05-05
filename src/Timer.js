import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [action, setAction] = useState("Ready");

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom, #e0f7ff, #ffffff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "320px",
        }}
      >
        <h1 style={{ color: "#5ec6ff" }}>Timer</h1>

        <h2 style={{ fontSize: "40px", margin: "20px 0" }}>
          {minutes}:{seconds.toString().padStart(2, "0")}
        </h2>

        {/* Action feedback */}
        <p style={{ color: "#5ec6ff", fontWeight: "bold" }}>
          {action}
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <button
            onClick={() => {
              setRunning(true);
              setAction("Start pressed");
            }}
            style={buttonStyle("#aeeaff", action === "Start pressed")}
          >
            Start
          </button>

          <button
            onClick={() => {
              setRunning(false);
              setAction("Stop pressed");
            }}
            style={buttonStyle("#aeeaff", action === "Stop pressed")}
          >
            Stop
          </button>

          <button
            onClick={() => {
              setRunning(false);
              setTime(0);
              setAction("Reset pressed");
            }}
            style={buttonStyle("#aeeaff", action === "Reset pressed")}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = (color, active) => ({
  padding: "10px",
  border: "none",
  borderRadius: "10px",
  backgroundColor: color,
  cursor: "pointer",
  fontWeight: "bold",
  transform: active ? "scale(1.08)" : "scale(1)",
  boxShadow: active ? "0 0 10px rgba(0,0,0,0.2)" : "none",
  transition: "all 0.2s ease",
});

export default Timer;