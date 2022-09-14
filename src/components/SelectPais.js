import { useEffect, useState } from "react";

const SelectPais = () => {
  const [paises, setPais] = useState([]);
  useEffect(() => {
    const fetchPais = async () => {
      const response = await fetch(
        `https://covid19-brazil-api.now.sh/api/report/v1/countries

        `
      );
      const responseJSON = await response.json();
      setPais(responseJSON.data);
    };
    fetchPais();
  }, []);

  return (
    <select id="pais">
      <option value="">pais</option>
      {paises.map((pais) => (
        <option value={pais.country} key={pais.country}>
          {pais.country}
        </option>
      ))}
    </select>
  );
};
export default SelectPais;
