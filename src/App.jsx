import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/Counter";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter myyear="2022" mymonth="02" myday="02" />
      <div className="Guestbook">
        <form>
          <input type="text" name="name"></input>
          <input type="text" />
          <input type="submit" value="Submit" />
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default App;
