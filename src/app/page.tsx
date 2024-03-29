"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "./styles.scss";
import serviceTaxCalculator from "@/service/serviceTaxCalculator";

export default function Home() {

  const handleSubmit = (e:any) => {
    e.preventDefault();
    serviceTaxCalculator();
  }

  return (
    <>
    <h2>Tax Calculator</h2>
    <main className={styles.main}>
      <div className={styles.description}>
        
        <form onSubmit={handleSubmit}>
          <input type="number" min="1" step="1" placeholder="Annual Income..." required />
          <input type="number" min="1" step="1" placeholder="Tax Year..." required />
          <div className="submit">
            <button type="submit">Send</button>
          </div>
        </form>

     </div>
    </main>
    </>
  );
}
