import { useEffect, useState } from "react";

const SelectEstados = () => {
  const [ufs, setUfs] = useState([]);
  useEffect(() => {
    const fetchUfs = async () => {
      const response = await fetch(
        `https://covid19-brazil-api.vercel.app/api/report/v1`
      );
      const responseJSON = await response.json();
      setUfs(responseJSON.data);
    };
    fetchUfs();
  }, []);

  return (
    <select id="estado">
      <option>selecione o estado</option>
      {ufs.map((uf) => (
        <option key={uf.uid} value={uf.uf}>
          {uf.state}
        </option>
      ))}
    </select>
  );
};

export default SelectEstados;
