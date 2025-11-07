# React useReducer Example

This project demonstrates how to manage complex state logic using the `useReducer` hook in React.

## Features
- Increment and decrement quantity with disabled button limits (0–10)
- Dynamically calculate total based on selected option value
- Select different options from a dropdown menu
- Automatically update total when quantity or selected item changes

## How it works
- The `reducer` function handles actions such as:
  - `init`: Initializes the total and button states
  - `incrementQuantity` / `decrementQuantity`: Adjusts quantity and updates total
  - `selectedItem`: Changes selected option and recalculates total
- Helper functions:
  - `reduceButtonState` — disables buttons when limits are reached
  - `reduceTotal` — recalculates the total based on current selection and quantity