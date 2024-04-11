"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "./styles.scss";
import serviceTaxCalculator from "@/service/serviceTaxCalculator";
import { useState } from 'react';

export default function Home() {

  let [income, setIncome] = useState();
  let [year, setYear] = useState();


  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    serviceTaxCalculator(income, year);
    // setIncome();
    // setYear();
  }

  return (
    <>
    <h2>Tax Calculator</h2>
    <main className={styles.main}>
      <div className={styles.description}>
        
        <form onSubmit={handleSubmit}>
          <input type="number" value={income} min="1" step="1" placeholder="Annual Income..." required onChange={(e:any) => setIncome(e.target.value)} />
          <input type="number" value={year} min="1" step="1" placeholder="Tax Year..." required onChange={(e:any) => setYear(e.target.value)} />
          <div className="submit">
            <button type="submit">Send</button>
          </div>
        </form>

     </div>
    </main>
    </>
  );
}
