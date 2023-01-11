import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/Counter";
import GuestBook from "./components/GuestBook";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Next christmas</h1>
      <Counter myyear="2023" mymonth="12" myday="25" />
      <div>
        <GuestBook />
      </div>
    </div>
  );
}

export default App;
