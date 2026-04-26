import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },

  React.createElement(
    "div",
    { id: "child" },

    [
      React.createElement(
        "div",
        { key: "row1" },
        [
          React.createElement("h1", { key: "row1-h1" }, "Child-1"),
          React.createElement("h2", { key: "row1-h2" }, "Child-2")
        ]
      ),

      React.createElement(
        "div",
        { key: "row2" },
        [
          React.createElement("h1", { key: "row2-h1" }, "Child-3"),
          React.createElement("h2", { key: "row2-h2" }, "Child-4")
        ]
      )
    ]
  )
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);