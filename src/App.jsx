import React, { useReducer, useEffect } from "react";

const initalState = {
  options: [
    { id: 1, name: "First", value: 10 },
    { id: 2, name: "Second", value: 50 },
    { id: 3, name: "Third", value: 200 },
  ],
  slected: 1,
  quantity: 1,
};

const reduceButtonState = (state) => {
  return {
    ...state,
    decrementDisabled: state.quantity === 0,
    incrementDisabled: state.quantity === 10,
  };
};

const reduceTotal = (state) => {
  const option = state.options.find((option) => option.id === state.slected);

  return { ...state, total: state.quantity * option.value };
};

const reducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "init":
      newState = reduceTotal(state);
      return reduceButtonState(newState);

    case "decrementQuantity":
      newState = { ...state, quantity: state.quantity - 1 };
      newState = reduceTotal(newState);
      return reduceButtonState(newState);

    case "incrementQuantity":
      newState = { ...state, quantity: state.quantity + 1 };
      newState = reduceTotal(newState);
      return reduceButtonState(newState);

    case "selectedItem":
      newState = { ...state, slected: Number(action.id) };
      return reduceTotal(newState);

    default:
      throw new Error(`${action.type} is not a valid action.`);
  }
};

const App = () => {
  const reducer_ = useReducer(reducer, initalState);
  console.log(reducer_);

  const [{options, selected, quantity, total, decrementDisabled, incrementDisabled }, dispatch] = reducer_;

  useEffect(() => {
    dispatch({ type: "init" });
  }, []);

  useEffect(() => {
    console.log("promena reducera", reducer_);
  }, [reducer_]);

  return (
    <>
      <section>
        <button
          disabled={decrementDisabled}
          onClick={() => dispatch({ type: "decrementQuantity" })}
        >
          -
        </button>
        <button
          disabled={incrementDisabled}
          onClick={() => dispatch({ type: "incrementQuantity" })}
        >
          +
        </button>
        <input readOnly value={quantity} />
      </section>
      <section>
        <select
          value={selected}
          onChange={(e) =>
            dispatch({ type: "selectedItem", id: e.target.value })
          }
        >
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.name}
            </option>
          ))}
        </select>
      </section>
      <section>
        <strong>{total}</strong>
      </section>
    </>
  );
};

export default App;
