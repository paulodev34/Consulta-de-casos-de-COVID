import React from "react";
import { useState } from "react";

const SelectPais = () => {
  const [paises] = useState([
    {
      country: "Canada",
      cases: 1299,
      confirmed: 1328,
      deaths: 19,
      recovered: 10,
      updated_at: "2020-03-21T23:43:02.000Z",
    },
  ]);

  return (
    <>
      <div>
        {paises.map((pais, index) => (
          <>
            <span>
              <p value={pais.country} key={index}>
                <strong>Pais: </strong>
                {pais.country}
              </p>
              <p>
                <strong>Casos Confirmados: </strong>
                {pais.cases}
              </p>
              <p>
                <strong>Confirmados: </strong>
                {pais.confirmed}
              </p>
              <p>
                <strong>Mortes: </strong>
                {pais.deaths}
              </p>
              <p>
                <strong>Recuperados: </strong>
                {pais.deaths}
              </p>
            </span>
          </>
        ))}
      </div>
    </>
  );
};
export default SelectPais;
