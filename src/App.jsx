import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.value };

    case "changeAge":
      return { ...state, age: action.value };

    default:
      throw new Error(`${action.type} is not valid action.`);
  }
};

const App = () => {
  const [{ name, age }, dispatch] = useReducer(reducer, { name: "", age: "" });

  return (
    <>
      <input
        value={name}
        onChange={(e) =>
          dispatch({ type: "changeName", value: e.target.value })
        }
      />
      <p>Name: {name}</p>

      <input
        value={age}
        onChange={(e) => dispatch({ type: "changeAge", value: e.target.value })}
      />
      <p>Age: {age}</p>
    </>
  );
};

export default App;