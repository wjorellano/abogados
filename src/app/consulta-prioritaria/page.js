import React from "react";
import { EmpresarioCard, TrabajadorCard } from "../../../components/Cards";

const ConsultaPrioritariaPage = () => {
  return (
    <div className="w-50 m-auto mt-5">
      <h1 className="text-center border">Consulta Prioritaria</h1>
      <div className="row justify-content-center mt-4">
        <div className="col col-md-6 col-sm-12">
          <EmpresarioCard />
        </div>
        <div className="col col-md-6 col-sm-12">
          <TrabajadorCard />
        </div>
      </div>
      <p className="text-center mt-5">
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
