import React, { useState } from "react";
import "./styles.css";
import On from "./On";
import Off from "./Off";

export default function App() {
  const [box, setBox] = useState(false);
  return (
    <div className="App">
      {box ? <On /> : <Off />}
      <hr />
      <button onClick={() => setBox(!box)}> Push</button>
    </div>
  );
}
