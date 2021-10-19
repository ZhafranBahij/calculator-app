import { react, useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

let group = [".", "=", ":"];

const RowFinal = (props) => {
  // const [group, setGroup] = useState(["C", "=", ":"]);
  let num = "";
  if (props.command === 1) {
    num = (
      <div class="col text-white text-center bg-dark" name={0}>
        0
      </div>
    );
  }
  if (props.command === 2) {
    group = ["<=", "C"];
  }
  return (
    <div class="row justify-content-between">
      {num}
      {group.map((gr) => (
        <div class="col text-white text-center bg-primary" name={gr}>
          {gr}
        </div>
      ))}
    </div>
  );
};

export default RowFinal;
