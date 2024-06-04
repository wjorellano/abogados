import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";

const Button = ({ title, subtitle, href }) => {
  return (
    <div className={styles.button}>
      <Link href={href} className="text-white text-decoration-none">
        <h2 className="text-white">{title}</h2>
        <p className="text-white">{subtitle}</p>
      </Link>
    </div>
  );
};

export default Button;
