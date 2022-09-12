import React from "react";
import SelectEstados from "./components/SelectEstado";

import "./App.css";
import SelectPais from "./components/SelectPais";

const App = () => {
  return (
    <div className="container">
      <div className="select-estado">
        <label htmlFor="estado">Estado: </label>
        <br />
        <SelectEstados />
        <br />

        <div className="select-pais">
          <label htmlFor="pais">Pais: </label>
          <br />
          <SelectPais />
        </div>

        <div className="formcontrol">
          <label>Data</label>
          <br />
          <input type="date" id="data" data-rules="required" />
          <br />
        </div>
      </div>
      <button className="consulta" type="submit" onClick="data">
        Consulta
      </button>
    </div>
  );
};

export default App;
