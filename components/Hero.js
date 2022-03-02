import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero} id="section">
      <Navbar />
      <div className={styles.herocontainers}>
        <div className={styles.herol}>
          <div className={styles.herop}>
            <h3>
              Litepaper Whitepaper Functionality Comparison Team Revolutionary
              Secure Messaging & Trading Dapp powered by Solana
            </h3>
          </div>
          <div className={styles.herobuttons}>
            <button className={styles.btn1}>Join</button>
            <button className={styles.btn2}>
              <Link href="https://covalent-eight.vercel.app/assets/litepaper.pdf">
                <a className={styles.a}> Litepaper</a>
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.heror}>
          <div className={styles.heroimg}>
            <Image src="/nj.png" width={400} height={450} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
