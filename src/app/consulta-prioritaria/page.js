import React from "react";

const ConsultaPrioritariaPage = () => {
  return (
    <div className="conatiner">
      <div className="row justify-content-center mt-5 m-auto">
        <h1 className="text-center">Consulta Prioritaria</h1>
      </div>
      <div className="row justify-content-center mt-4 m-auto mb-5">
        <div className="col-12 col-md-4 col-sm-12">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Empresas</h5>
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
              <a
                href="/formulario-empresario"
                className="btn btn-primary w-100"
              >
                Diligenciar formulario
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 col-sm-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Trabajadores</h5>
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
              <a
                href="/formulario-trabajador"
                className="btn btn-primary w-100"
              >
                Diligenciar formulario
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-2">
        Formas de pago: Transferencia electrónica: Davivienda – Bancolombia –
        Nequi
      </p>
    </div>
  );
};

export default ConsultaPrioritariaPage;

// <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//   <EmpresarioCard />
//   <TrabajadorCard />
// </div>
// <p style={{ display: 'flex', justifyContent: 'space-around' }}>
// <br />
//     Formas de pago: Transferen cia electrónica: Davivienda – Bancolombia – Nequi
// </p>
// <div className="w-100 m-auto mt-5 border">
//   <h1 className="text-center">Consulta Prioritaria</h1>
//   <div className="row justify-content-center mt-4 m-auto">
//     <div className="col col-md-6 col-sm-12">
//       <EmpresarioCard />
//     </div>
//     <div className="col col-md-6 col-sm-12">
//       <TrabajadorCard />
//     </div>
//   </div>
//   <p className="text-center mt-5">
//     Formas de pago: Transferencia electrónica: Davivienda – Bancolombia –
//     Nequi
//   </p>
// </div>;
