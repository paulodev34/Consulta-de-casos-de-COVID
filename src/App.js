import React from "react";
import "./App.css";

import DadosCOVID from "./components/DadosCOVID";
import SelectPais from "./components/SelectPais";
import SelectBrasil from "./components/SelectBrasil";

const App = () => {
  return (
    <>
      <div className="container-covid">
        <h1>Status COVID</h1>
        <DadosCOVID />
      </div>

      <div className="container-pais">
        <h3>Status Canada</h3>
        <SelectPais />
      </div>
      <div className="container-brasil">
        <h3>Status Brasil</h3>
        <SelectBrasil />
      </div>
    </>
  );
};

export default App;
