Description

Simple React example demonstrating how to use the useReducer hook to manage multiple input states (name and age).
The reducer function updates the state based on dispatched actions from each input field.

How It Works

* useReducer is used instead of useState for managing more complex state.
* The reducer function handles two actions:
    changeName → updates the name value
    changeAge → updates the age value
* Each input field triggers a dispatch that sends the action to the reducer.

Key Concepts

* state – holds current values (name, age)
* reducer – defines how the state changes
* dispatch – sends actions to the reducer
* action – describes what change should happen

How to Run

1. Clone this repository
2. Run npm install
3. Start the project with npm start