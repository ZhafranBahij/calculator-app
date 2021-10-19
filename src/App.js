import { react, useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Row from "./row.js";
import RowFinal from "./rowfinal.js";

const Calculator = () => {
  const [number, setNumber] = useState("");

  const handleClick = (event) => {
    console.log(event.target.value);
    setNumber(number + event.target.value);
  };

  return (
    <div class="container d-grid gap-3 text-white">
      <div class="result visible bg-white text-dark text-end ">
        <h3>{number}</h3>
      </div>
      <Row command={1} handleClick={handleClick} />
      <Row command={4} />
      <Row command={7} />
      <RowFinal command={1} />
      <RowFinal command={2} />
    </div>
  );
};

function App() {
  return <Calculator />;
}

export default App;
