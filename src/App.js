import SelectEstados from "./components/SelectEstados";
import SelectPais from "./components/SelectPais";

import "./App.css";

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
      <button className="consulta" type="submit">
        Consulta
      </button>
    </div>
  );
};

export default App;
