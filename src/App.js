import react from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Calculator extends react.Component {
  constructor(property) {
    super(property);
    this.state = {
      calculator_template: 0,
      calculator_text: "",
    };
    this.anon = "";
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.anon += event.target.getAttribute("name");
    this.setState({ calculator_text: this.anon });
    console.log(this.anon);
    console.log(event.target.getAttribute("name"));
  }

  handleSubmit(event) {
    alert(event.target.getAttribute("name"));
    console.log(event.target.name);
  }

  render() {
    return (
      <div class="container d-grid gap-3 text-white">
        <div class="visible">{this.anon}</div>
        <div class="row justify-content-between">
          <div
            class="col bg-dark text-white text-center"
            value="1"
            name="1"
            onClick={this.handleChange}
          >
            1
          </div>
          <div class="col bg-dark text-white text-center">2</div>
          <div class="col bg-dark text-white text-center">3</div>
          <div class="col bg-primary text-white text-center">+</div>
        </div>
        <div class="row  justify-content-between">
          <div class="col bg-dark text-white text-center">4</div>
          <div class="col bg-dark text-white text-center">5</div>
          <div class="col bg-dark text-white text-center">6</div>
          <div class="col bg-primary text-white text-center">-</div>
        </div>
        <div class="row justify-content-between">
          <div class="col bg-dark text-white text-center">7</div>
          <div class="col bg-dark text-white text-center">8</div>
          <div class="col bg-dark text-white text-center">9</div>
          <div class="col bg-primary text-white text-center">x</div>
        </div>
        <div class="row justify-content-between">
          <div class="col bg-dark text-white text-center">0</div>
          <div class="col bg-primary text-white text-center">.</div>
          <div class="col bg-primary text-white text-center">=</div>
          <div class="col bg-primary text-white text-center">:</div>
        </div>
      </div>
    );
  }
}

function App() {
  return <Calculator />;
}

export default App;
