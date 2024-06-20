"use client";

import React, { useState } from "react";
import FormularioEmpresario from "../formulario-empresario/page";
import FormularioTrabajador from "../formulario-trabajador/page";
import Link from "next/link";
// import "../globals.css";

const ConsultaPrioritariaPage = () => {
  const [activeForm, setActiveForm] = useState(false);

  const handleFormClick = (form) => {
    setActiveForm(form);
  };

  console.log(activeForm);

  return (
    <div className="container">
      <div className={activeForm ? "shift-left" : " wrapper"}>
        {activeForm === false ? (
          <>
            <div className=" row w-100 mx-auto">
              <div className="row justify-content-center mt-2 pb-5 m-auto">
                <h1 className="text-center">Consulta Prioritaria</h1>
              </div>
              <div className="col-12 col-sm-12 col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title text-center mb-4">
                      Persona Jurídica
                    </h5>{" "}
                    <p className="card-text text-center">
                      <strong>QUIERO UNA CONSULTA PRIORITARIA – PAGA</strong>
                      <br />
                      <br />
                      Se agenda de manera inmediata
                      <br />
                      1 hora virtual: $100.000
                      <br />
                      1 hora presencial: $200.000
                      <br />
                      <em>El modo presencial solo aplica para Barranquilla (*)</em>
                      <br />
                      <br />
                    </p>
                    <a
                      href="https://wa.me/message/UY2EX4PNZT2IN1"
                      className="btn btn-primary w-100"
                    >
                      Ir a WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center mb-4">
                      Persona Natural
                    </h5>
                    <p className="card-text text-center">
                      <strong>QUIERO UNA CONSULTA PRIORITARIA – PAGA</strong>
                      <br />
                      <br />
                      Se agenda de manera inmediata
                      <br />
                      30 minutos virtual: $50.000
                      <br />
                      1 hora virtual: $80.000
                      <br />
                      1 hora presencial: $150.000
                      <br />
                      <em>El modo presencial solo aplica para Barranquilla (*)</em>
                      <br />
                    </p>
                    <a
                      // colocar un mensaje para whatsapp
                      href="https://wa.me/message/UY2EX4PNZT2IN1?text=Hola quiero una consulta prioritaria"
                      className="btn btn-primary w-100"
                    >
                      Ir a WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center mt-5">
              Formas de pago: Transferencia electrónica: Davivienda –
              Bancolombia – Nequi
            </p>
          </>
        ) : activeForm === "empresario" ? (
          <div className="container">
            {/* <a
              href="#"
              onClick={() => setActiveForm(false)}
              className="text-decoration-none ml-auto"
            >
              <i className="fas fa-arrow-left"></i> Volver
            </a> */}
            <div className="row justify-content-center mt-5 pb-5 m-auto">
              <h1 className="text-center">Consulta Prioritaria</h1>
            </div>
            <FormularioEmpresario />
            <button
              className="btn border border-danger text-danger w-100 mt-2 mb-4"
              onClick={() => setActiveForm(false)}
            >
              Volver
            </button>
          </div>
        ) : (
          <div className="container">
            <div className="row justify-content-center mt-5 pb-5 m-auto">
              <h1 className="text-center">Consulta Prioritaria</h1>
            </div>
            <FormularioTrabajador />
            <button
              className="btn border border-danger text-danger w-100 mt-2 mb-4"
              onClick={() => setActiveForm(false)}
            >
              Volver
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultaPrioritariaPage;
