import Image from "next/image";
import styles from "./page.module.css";
import Button from "../../components/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Mendoza & Gutiérrez"
            width={100}
            height={100}
          />
          <h2>Mendoza & Gutiérrez</h2>
          <p>Abogados</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.info}>
          <h1>SI SELECCIONAMOS TU CASO LA CONSULTA ES GRATIS</h1>
          <p>TIEMPO DE RESPUESTA 1 – 3 DÍAS HÁBILES</p>
          
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
  );
}
