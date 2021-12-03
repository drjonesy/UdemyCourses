// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const buttonText = { text: "Click Me!" };

  return (
    <div>
      <label htmlFor="name" className="label">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "4px 8px",
          border: "none",
          marginLeft: "2px",
        }}
      >
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
