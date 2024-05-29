import React from "react";
import { EmpresarioCard, TrabajadorCard } from '../../../components/Cards';

const ConsultaPrioritariaPage = () => {
  return (
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'space-around' }}>Consulta Prioritaria</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <EmpresarioCard />
        <TrabajadorCard />
      </div>
      <p style={{ display: 'flex', justifyContent: 'space-around' }}>
      <br />
          Formas de pago: Transferen cia electrónica: Davivienda – Bancolombia – Nequi
      </p>
    </div>
  );
};

export default ConsultaPrioritariaPage;
