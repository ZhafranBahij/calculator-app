import { react, useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Row = (props) => {
  const [group, setGroup] = useState([
    props.command,
    props.command + 1,
    props.command + 2,
  ]);
  let operator = "";
  if (props.command === 1) {
    operator = "+";
  }
  if (props.command === 4) {
    operator = "-";
  }
  if (props.command === 7) {
    operator = "x";
  }
  return (
    <div class="row justify-content-between">
      {console.log(group)}
      {group.map((gr) => (
        <div
          class="col text-white text-center bg-dark"
          value={gr}
          onClick={props.handleClick}
        >
          {gr}
        </div>
      ))}
      <div class="col text-white text-center bg-primary" name={operator}>
        {operator}
      </div>
    </div>
  );
};

export default Row;
