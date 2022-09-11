import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [estado, pais] = useState("1");

  return (
    <div className="container">
      <div className="select-estado">
        <label>Estado </label>
        <br />
        <select name="estado" value={estado}>
          <option value="">selecione</option>
          <option value="state">sp</option>
        </select>
        <br />

        <div className="select-pais">
          <label>Pais </label>
          <br />
          <select name="pais" value={pais}>
            <option value="">pais</option>
            <option value="uf">Brasil</option>
          </select>
        </div>

        <div className="formcontrol">
          <label>Data de Nascimento</label>
          <br />
          <input type="date" id="data" data-rules="required" />
          <br />
        </div>
      </div>
      <button className="consulta" type="submit">
        Consulta
      </button>
    </div>
  );
};

export default App;
