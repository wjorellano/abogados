import React from "react";
import styles from "../src/app/page.module.css";
import Link from "next/link";

const Button = ({ title, subtitle, href }) => {
  return (
    <Link href={href} className={styles.button + " text-decoration-none w-100"}>
      <h2 className="text-white">{title}</h2>
      <p className="text-white">{subtitle}</p>
    </Link>
  );
};

export default Button;
