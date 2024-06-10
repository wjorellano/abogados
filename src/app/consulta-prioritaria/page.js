'use client';

import React, { useState } from "react";
import FormularioEmpresario from "../formulario-empresario/page";
import FormularioTrabajador from "../formulario-trabajador/page";
import '../globals.css';

const ConsultaPrioritariaPage = () => {
  const [activeForm, setActiveForm] = useState(null);

  const handleFormClick = (form) => {
    setActiveForm(form);
  };

  return (
    <div id="">
      <div id="container" className={activeForm ? 'shift-left' : ''}>
        <div className="row justify-content-center mt-4 m-auto mb-5">
        <div className="row justify-content-center mt-5 pb-5 m-auto">
              <h1 className="text-center">Consulta Prioritaria</h1>
            </div>
          <div className="col-md-6">
            
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Persona Jurídica</h5>
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
                  <br />
                </p>
                <button
                  onClick={() => handleFormClick("empresario")}
                  className="btn btn-primary w-100"
                >
                  Diligenciar formulario
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Persona Natural</h5>
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
                </p>
                <button
                  onClick={() => handleFormClick("trabajador")}
                  className="btn btn-primary w-100"
                >
                  Diligenciar formulario
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {activeForm === "empresario" && <FormularioEmpresario />}
            {activeForm === "trabajador" && <FormularioTrabajador />}
          </div>
        </div>
      </div>
      <p className="text-center mt-2">
        Formas de pago: Transferencia electrónica: Davivienda – Bancolombia – Nequi
      </p>
    </div>
  );
};

export default ConsultaPrioritariaPage;
