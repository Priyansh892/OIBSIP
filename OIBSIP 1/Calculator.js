const calculator = document.querySelector(".calculator");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const inputValue = button.value;
    const display = document.querySelector("#result");

    if (inputValue === "Enter" || inputValue==="ans") {
      const equation = display.value;
      const result = eval(equation);
      display.value = result;
    } else if (inputValue === "clear"||inputValue==="del") {
      display.value = "";
    }
    else if (inputValue === "√") {
        display.value=Math.sqrt(display.value);
      }
    else {
      display.value += inputValue;
    }
  });
});
