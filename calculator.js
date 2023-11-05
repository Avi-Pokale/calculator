document.addEventListener("DOMContentLoaded", function () {
    const toDoOperation = document.getElementById("toDoOperation");
    const buttons = document.querySelectorAll(".number button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const value = button.textContent;
        if (value === "C") {
          // Clear the input field
          toDoOperation.value = "";
        } else if (value === "=") {
          // Evaluate the expression and display the result
          try {
            toDoOperation.value = eval(toDoOperation.value);
          } catch (error) {
            toDoOperation.value = "Error";
          }
        } else {
          // Append the button's value to the input field
          toDoOperation.value += value;
        }
      });
    });
  });