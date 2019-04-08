import React, { useState } from "react";
import ReactDOM from "react-dom";
import SignUp from "./signUp";
import SignIn from "./signIn";
import OverLay from "./overLay";

import "./styles.css";

function App() {
  const [toggleClassName, setClassName] = useState("container");

  function onClick() {
    if (toggleClassName === "container") {
      setClassName("container right-panel-active");
    } else {
      setClassName("container");
    }
  }

  return (
    <div className="App">
      <div className={toggleClassName}>
        <SignIn />
        <SignUp />
        <OverLay onClick={onClick} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
