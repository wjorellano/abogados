"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Button from "../../components/Button";
import logo from "../app/logo.jpeg";

export default function Home() {
  return (
    <div className="container-fluid h-100 mb-4 mt-5">
      {" "}
      {/* Contenedor de la tarjeta */}
      <div className="row">
        <div className="col">
          <div className={styles.logo}>
            <Image
              src={logo}
              alt="Mendoza & Gutiérrez"
              width="500"
              height="500"
            />
            {/* <h2>Mendoza & Gutiérrez</h2>
            <p>Abogados</p> */}
          </div>
        </div>
        <div className="col ">
          <div className={styles.info}>
            <h1 className="text-center mt-5 w-100">
              SI SELECCIONAMOS TU CASO LA CONSULTA ES GRATIS
            </h1>
            <p className="text-center">
              TIEMPO DE RESPUESTA 1 – 3 DÍAS HÁBILES
            </p>

            <Button
              title="SOY EMPRESARIO"
              subtitle="TENGO UN CASO LABORAL"
              href="/empresario"
            />

            <Button
              title="SOY EMPLEADO"
              subtitle="TENGO UN CASO LABORAL"
              href="/empleado-laboral"
            />

            <Button
              title="SOY EMPLEADO"
              subtitle="TENGO UN CASO LABORAL: ACCIDENTES DE TRABAJO - ENFERMEDADES LABORALES"
              href="/empleado-accidentes"
            />

            <Button
              title="QUIERO UNA CONSULTA"
              subtitle="PRIORITARIA PAGA - SE AGENDA DE MANERA INMEDIATA"
              href="/consulta-prioritaria"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
