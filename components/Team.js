import Image from "next/image";
import styles from "../styles/Team.module.css";
const Team = () => {
  return (
    <div className={styles.team} id="section1">
      <h1 className={styles.teamh}>VENTURE</h1>
      <div className={styles.theteam}>
        <div className={styles.teamperson1}>
          <Image src="/haider.png" width={250} height={250} />
          <br />
          GHULAM HAIDER
        </div>

        <div className={styles.teamperson2}>
          <Image src="/ikram.png" width={250} height={250} />
          <br />
          Dr. IKRAM ASHRAF
        </div>

        <div className={styles.teamperson3}>
          <Image src="/auth.png" width={250} height={250} />
          <br />
          AUTHORNATE
        </div>
      </div>
    </div>
  );
};

export default Team;
