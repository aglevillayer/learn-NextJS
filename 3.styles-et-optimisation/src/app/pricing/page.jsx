import React from "react";
import styles from "./pricing.module.css";

export const metadata = {
  title: "On pricing page",
  description: "Learn metadatas from udemy",
  openGraph: {
    title: "Mon site",
    description: "Abcde",
  },
};

function page() {
  return (
    <div>
      <h1 className={styles.title}>Pricing</h1>
    </div>
  );
}

export default page;
