import Image from "next/image";
import styles from "../styles/Roadmap.module.css";

const Roadmap = () => {
  return (
    <div className={styles.roadmap} id="section5">
      <h1 className={styles.roadmaph}>ROADMAP</h1>

      <div className={styles.roadmaptopics1}>
        <div className={styles.topic1}>
          Trade over-the counter (OTC) crypto assets and tokens P2P via an
          integrated ESC (escrow smart contract) functionality.
        </div>

        <div className={styles.topic2}>
          Trade over-the counter (OTC) crypto assets and tokens P2P via an
          integrated ESC (escrow smart contract) functionality.
        </div>

        <div className={styles.topic3}>
          Trade over-the counter (OTC) crypto assets and tokens P2P via an
          integrated ESC (escrow smart contract) functionality.
        </div>
      </div>

      <div className={styles.roadmapimg}>
        <Image src="/neww.png" width={450} height={250} />
      </div>

      <div className={styles.roadmaptopics2}>
        <div className={styles.topicp1}>
          Trade over-the counter (OTC) crypto assets and tokens P2P via an
          integrated ESC (escrow smart contract) functionality.
        </div>

        <div className={styles.topicp2}>
          Trade over-the counter (OTC) crypto assets and tokens P2P via an
          integrated ESC (escrow smart contract) functionality.
        </div>

        <div className={styles.topicp3}>
          Trade over-the counter (OTC) crypto assets and tokens P2P via an
          integrated ESC (escrow smart contract) functionality.
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
