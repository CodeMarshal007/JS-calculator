function basicCalculator() {
  alert("Welcome to basic arithmetic calculator");
  const operation = prompt(
    "What operation would you like to perform? you have option of '+' '-' '*' and '/' "
  );
  console.log(operation);
  if (operation == null) {
    alert("You cancelled calculator, see you another time!!!");
    return;
  }
  const v1 = Number(prompt("Enter your first number: "));
  const v2 = Number(prompt("Enter your second number: "));

  if (operation == "+") {
    alert(`your answer is ` + (v1 + v2));
  } else if (operation == "-") {
    alert(`your answer is ` + (v1 - v2));
  } else if (operation == "*") {
    alert(`your answer is ` + v1 * v2);
  } else if (operation == "/") {
    alert(`your answer is ` + v1 / v2);
  } else {
    alert("invalid operation");
  }
}

basicCalculator();
