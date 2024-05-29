'use client'
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "next/link";

const EmpresarioCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Empresas</Card.Title>
        <Card.Text>
          <strong>QUIERO UNA CONSULTA PRIORITARIA – PAGA</strong>
          <br />
          Se agenda de manera inmediata
          <br />
          1 hora virtual: $100.000
          <br />
          1 hora presencial: $200.000
          <br />
        </Card.Text>
        <Button as={Link} to="/formulario-empresario" variant="primary">
          Diligenciar formulario
        </Button>
      </Card.Body>
    </Card>
  );
};

const TrabajadorCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Trabajadores</Card.Title>
        <Card.Text>
          <strong>QUIERO UNA CONSULTA PRIORITARIA – PAGA</strong>
          <br />
          Se agenda de manera inmediata
          <br />
          30 minutos virtual: $50.000
          <br />
          1 hora virtual: $80.000
          <br />
          1 hora presencial: $150.000
          <br />
        </Card.Text>
        <Button as={Link} to="/formulario-trabajador" variant="primary">
          Diligenciar formulario
        </Button>
      </Card.Body>
    </Card>
  );
};

export { EmpresarioCard, TrabajadorCard };

