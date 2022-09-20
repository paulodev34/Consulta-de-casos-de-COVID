import React from "react";
import { useEffect, useState } from "react";
import { Table } from "reactstrap";

const DadosCOVID = () => {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    const fetchDados = async () => {
      const response = await fetch(
        `https://covid19-brazil-api.vercel.app/api/report/v1/`
      );
      const responseJSON = await response.json();
      setDados(responseJSON.data);
    };
    fetchDados();
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr style={{ color: "blue" }}>
            <th>Estado</th>
            <th>Casos Confirmados</th>
            <th style={{ color: "red" }}>Mortes</th>
            <th>Suspeitas</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((dado) => (
            <tr>
              <td key={dado.uid} value={dado.uid}>
                {dado.uf}
              </td>

              <td>{dado.cases}</td>
              <td style={{ color: "red" }}>{dado.deaths} </td>
              <td>{dado.suspects}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DadosCOVID;
