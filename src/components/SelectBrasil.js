import React from "react";
import { useState } from "react";

const SelectBrasil = () => {
  const [ufs] = useState([
    {
      country: "Brazil",
      cases: 1001,
      confirmed: 1021,
      deaths: 18,
      recovered: 2,
      updated_at: "2020-03-22T02:13:13.000Z",
    },
  ]);

  return (
    <div>
      {ufs.map((uf, index) => (
        <span>
          <p key={index} value={uf.country}>
            <strong>Pais: </strong>
            {uf.country}
          </p>
          <p>
            <strong>Casos Confirmados: </strong>
            {uf.cases}
          </p>
          <p>
            <strong>Confirmados: </strong>
            {uf.confirmed}
          </p>
          <p>
            <strong>Mortes: </strong>
            {uf.deaths}
          </p>
          <p>
            <strong>Recuperados: </strong>
            {uf.deaths}
          </p>
        </span>
      ))}
    </div>
  );
};

export default SelectBrasil;
