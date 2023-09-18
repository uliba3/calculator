# Simple JavaScript Calculator

This is a simple calculator implemented in JavaScript with a basic HTML and CSS interface. The calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also supports clearing the input and evaluating expressions.

## Features

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Clear input (C)
- Evaluation of expressions (=)
- Display of the input equation

## Code Structure

The code is organized into several components for clarity and maintainability:

- **Variables**: The code uses `const` and `let` appropriately to declare and initialize variables.

- **HTML Structure**: The calculator interface is created using HTML and organized into three main sections: the display, numpad (numeric buttons), and operators (operators and control buttons).

- **Event Listeners**: Event listeners are used to handle button clicks for numeric buttons and operators. When a button is clicked, it updates the input equation and displays it on the calculator's screen.

- **Operator Handling**: Operators are handled in a separate function. It allows users to input and evaluate mathematical expressions.

- **Validation**: There is a placeholder function for validation that you can expand upon to ensure the input is valid before evaluation.

- **Clear Function**: A clear function is provided to reset the calculator's input.

- **Display Equation**: This function updates the display with the current input equation.

- **Calculation Function**: The calculation function performs the actual mathematical calculation based on the input equation.

## Styling

The calculator interface is styled using CSS to create a visually appealing and user-friendly design. Buttons change color on hover to provide feedback to the user.

## Usage

To use the calculator:

1. Click numeric buttons to input numbers.
2. Click operator buttons to input operators (+, -, *, /, =).
3. Click "C" to clear the input.
4. Click "=" to evaluate the expression and display the result.

## Author

uliba3

## Acknowledgments

This calculator was created as a learning project and may be improved and extended for more advanced functionality and user features. Feel free to contribute and make it even better!