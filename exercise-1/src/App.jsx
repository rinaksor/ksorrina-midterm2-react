import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use a boolean state to manage the weather */
  const [running, setRunning] = useState(false);
  const [title, setTile] = useState("");

  function onSunClick() {
    setRunning(false)
  }

  function onRainClick() {
    setRunning(true)
  }

  function getTitle() {
 }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
  }

  return (
    <main>
      <h1>{title}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
