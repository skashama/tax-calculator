import Image from "next/image";
import styles from "./page.module.css";
import "./styles.scss";

export default function Home() {
  return (
    <>
    <h2>Tax Calculator</h2>
    <main className={styles.main}>
      <div className={styles.description}>
        
        <form>
          <input type="number" min="1" step="1" placeholder="Annual Income..." required />
          <input type="number" min="1" step="1" placeholder="Tax Year..." required />
          <div className="submit">
            <input type="submit" value="Send" />
          </div>
        </form>

      </div>
    </main>
    </>
  );
}
