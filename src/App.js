import react from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function NumBotton(property) {
  return (
    <div class="col bg-dark text-white text-center" name={property.numeric}>
      {property.numeric}
    </div>
  );
}

class Calculator extends react.Component {
  constructor(property) {
    super(property);
    this.state = {
      calculator_template: 0,
      calculator_text: "",
    };
    this.temp_caltext = "";
    this.temp_number_group = [null];
    this.temp_operator_group = [null];
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.operators = ["+", "-", "x", ":"];
  }

  handleChange(event) {
    let count = [0, 0];
    let true_count = 0;
    let name = event.target.getAttribute("name");
    this.operators.forEach((operator) => {
      if (this.temp_caltext.charAt(this.temp_caltext.length - 1) === operator) {
        count[0]++;
        if (count[0] === 1) {
          true_count++;
        }
        console.log(`${operator}: ${count}`);
      }
      if (name === operator) {
        count[1]++;
        if (count[1] === 1) {
          true_count++;
        }
      }
      console.log(`${operator}: ${count}`);
      if (true_count === 2) {
        true_count++;
        alert("After operator don't use operator");
      }
    });
    if (true_count !== 3) {
      this.temp_caltext += name;
      this.setState({ calculator_text: this.temp_caltext });
    }
  }

  handleClear() {
    this.setState({ calculator_text: "" });
    this.temp_caltext = "";
  }

  handleResult() {
    let operations = this.temp_caltext;
    let number = "";
    for (let i = 0; i < operations.length; i++) {
      console.log(operations.charAt(i));
      if (this.operators.includes(operations.charAt(i))) {
        number = parseInt(number);
        this.temp_number_group.push(number);
        this.temp_operator_group.push(operations.charAt(i));
        number = "";
      } else {
        number += operations.charAt(i);
      }
    }

    this.temp_number_group.push(parseInt(number)); //Menampung bilangan dalam bentuk ingeger ke array
    let number1 = this.temp_number_group.pop(); //Memberikan nilai bilangan terakhir
    let number2 = this.temp_number_group.pop(); //Memberikan nilai bilangan terakhir kedua
    let operation = this.temp_operator_group.pop(); //Memberikan operator terakhir
    number = this.some_operation(number1, number2, operation); // Melakukan operasi
    this.temp_caltext = number.toString();
    this.setState({ calculator_text: this.temp_caltext });
  }

  some_operation(num1, num2, op) {
    if (op === "+") {
      return num1 + num2;
    }
    if (op === "-") {
      return num1 - num2;
    }
    if (op === "x") {
      return num1 * num2;
    }
    if (op === ":") {
      return num1 / num2;
    }
  }

  render() {
    return (
      <div class="container d-grid gap-3 text-white">
        <div class="result visible bg-white text-dark text-end ">
          <h3>{this.state.calculator_text}</h3>
        </div>
        <div class="row justify-content-between">
          <div
            class="col bg-dark text-white text-center"
            onClick={this.handleChange}
            name="1"
          >
            1
          </div>
          <div
            class="col bg-dark text-white text-center"
            onClick={this.handleChange}
            name="2"
          >
            2
          </div>
          <div
            class="col bg-dark text-white text-center"
            onClick={this.handleChange}
            name="3"
          >
            3
          </div>
          <div
            class="col bg-primary text-white text-center"
            onClick={this.handleChange}
            name="+"
          >
            +
          </div>
        </div>
        <div class="row  justify-content-between">
          <div
            class="col bg-dark text-white text-center"
            onClick={this.handleChange}
            name="4"
          >
            4
          </div>
          <div
            class="col bg-dark text-white text-center"
            onClick={this.handleChange}
            name="5"
          >
            5
          </div>
          <div
            class="col bg-dark text-white text-center"
            onClick={this.handleChange}
            name="6"
          >
            6
          </div>
          <div
            class="col bg-primary text-white text-center"
            onClick={this.handleChange}
            name="-"
          >
            -
          </div>
        </div>
        <div class="row justify-content-between">
          <div
            class="col bg-dark text-white text-center"
            onClick={this.handleChange}
            name="7"
          >
            7
          </div>
          <div
            class="col bg-dark text-white text-center"
            onClick={this.handleChange}
            name="8"
          >
            8
          </div>
          <div
            class="col bg-dark text-white text-center"
            onClick={this.handleChange}
            name="9"
          >
            9
          </div>
          <div
            class="col bg-primary text-white text-center"
            onClick={this.handleChange}
            name="x"
          >
            x
          </div>
        </div>
        <div class="row justify-content-between">
          <div
            class="col bg-dark text-white text-center"
            onClick={this.handleChange}
            name="0"
          >
            0
          </div>
          <div
            class="col bg-danger text-white text-center"
            onClick={this.handleClear}
          >
            C
          </div>
          <div
            class="col bg-primary text-white text-center"
            onClick={this.handleResult}
            name="="
          >
            =
          </div>
          <div
            class="col bg-primary text-white text-center"
            onClick={this.handleChange}
            name=":"
          >
            :
          </div>
        </div>
      </div>
    );
  }
}

function App() {
  return <Calculator />;
}

export default App;
