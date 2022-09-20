import React from "react";
import { useState } from "react";

const SelectBrasil = () => {
  const [countrys] = useState([
    {
      id: 1,
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
      {countrys.map((country) => (
        <span>
          <p key={country.id}>
            <strong>Pais: </strong>
            {country.country}
          </p>
          <p>
            <strong>Casos Confirmados: </strong>
            {country.cases}
          </p>
          <p>
            <strong>Confirmados: </strong>
            {country.confirmed}
          </p>
          <p>
            <strong>Mortes: </strong>
            {country.deaths}
          </p>
          <p>
            <strong>Recuperados: </strong>
            {country.deaths}
          </p>
        </span>
      ))}
    </div>
  );
};

export default SelectBrasil;
