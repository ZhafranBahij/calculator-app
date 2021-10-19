import react from "react";

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
    this.Number = this.Number.bind(this);
    this.operators = ["+", "-", "x", ":"];
  }

  handleChange(event) {
    let name = event.target.getAttribute("name");
    let calculator_length = this.state.calculator_text.length;

    // Check if the operators was in front
    if (this.operators.includes(name) && calculator_length === 0) {
      alert("Don't input operator early!");
      return;
    }

    if (
      this.operators.includes(
        this.state.calculator_text.charAt(calculator_length - 1)
      ) &&
      this.operators.includes(name)
    ) {
      alert("After operator don't use operator");
    } else {
      this.temp_caltext += name;
      this.setState({ calculator_text: this.temp_caltext });
    }
  }

  handleClear() {
    this.setState({ calculator_text: "" });
    this.temp_caltext = "";
  }

  handleResult() {
    let x = 0;
    for (let i = 0; i < this.temp_caltext.length; i++) {
      if (this.operators.includes(this.temp_caltext.charAt(i))) {
        x += 1;
      }
    }

    if (x === 0) {
      alert("Well, i hope you don't use '=' if it doesn't has any operator");
      return;
    }

    if (x >= 2) {
      alert("I'm apologize, i just can operate one operation.");
      return;
    }

    let operations = this.temp_caltext;
    let number = "";
    for (let i = 0; i < operations.length; i++) {
      // console.log(operations.charAt(i));
      if (this.operators.includes(operations.charAt(i))) {
        number = parseInt(number);
        this.temp_number_group.push(number);
        this.temp_operator_group.push(operations.charAt(i));
        number = "";
      } else {
        number += operations.charAt(i);
      }
    }

    this.temp_number_group.push(parseInt(number)); //Menampung bilangan dalam bentuk integer ke array
    let number2 = this.temp_number_group.pop(); //Memberikan nilai bilangan terakhir
    let number1 = this.temp_number_group.pop(); //Memberikan nilai bilangan terakhir kedua
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
      if (num1 - num2 < 0) {
        alert(
          "I'm sorry, i can't operate it if the number is below zero. So, i'll absolue it."
        );
      }
      return Math.abs(num1 - num2);
    }
    if (op === "x") {
      return num1 * num2;
    }
    if (op === ":") {
      return num1 / num2;
    }
  }

  Number(chara, type = "operator") {
    let x;
    //* Jika itu merupakan angka
    if (type === "num") {
      x = (
        <div
          class="col text-white text-center bg-dark"
          onClick={this.handleChange}
          name={chara}
        >
          {chara}
        </div>
      );
    } else {
      //* Jika itu merupakan operator
      x = (
        <div
          class="col text-white text-center bg-primary"
          onClick={this.handleChange}
          name={chara}
        >
          {chara}
        </div>
      );
    }
    return x;
  }

  render() {
    return <div>Yaharo</div>;
  }
}
