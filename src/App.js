import React from "react";
import "./App.css";

import DadosCOVID from "./components/DadosCOVID";
import SelectPais from "./components/SelectPais";
import SelectBrasil from "./components/SelectBrasil";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    state: yup.string().required("O estado é obrigatorio"),
    cases: yup.string().required("Casos é obrigatorio"),
    confirm: yup.string().required("Confirmados é obrigatorio"),
    dead: yup.string().required("Mortes é obrigatorio"),
    recuperados: yup.string().required("Recuperados é obrigatorio"),
  })
  .required();

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(userData) {
    alert("Formulario Enviado");
  }

  return (
    <>
      <div className="box-1">
        <header>
          <h1>Status COVID </h1>
        </header>
        <DadosCOVID />
      </div>

      <div className="box-2">
        <h3>Status Canada</h3>
        <SelectPais />
      </div>
      <div className="box-3">
        <h3>Status Brasil</h3>

        <SelectBrasil />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2> Registrar novos casos</h2>
        <label>
          Estado
          <input {...register("state", { required: true })} />
          <span>{errors.state?.message}</span>
        </label>

        <label>
          Casos
          <input {...register("cases", { required: true })} />
          <span>{errors.cases?.message}</span>
        </label>

        <label>
          Confirmados
          <input {...register("confirm", { required: true })} />
          <span>{errors.confirm?.message}</span>
        </label>

        <label>
          Mortos
          <input {...register("dead", { required: true })} />
          <span>{errors.dead?.message}</span>
        </label>

        <label>
          Recuperados
          <input {...register("recuperados", { required: true })} />
          <span>{errors.recuperados?.message}</span>
        </label>

        <label>
          Data
          <input type="date" />
          <span>{errors.data?.message}</span>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default App;
