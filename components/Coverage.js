import Image from "next/image";

import { useState } from "react";

import styles from "../styles/Coverage.module.css";

const Coverage = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.coverage} id="section3">
      <h1 className={styles.coverageh}>EXCLUSIVE COVERAGE</h1>

      <div className={show ? styles.coveragemainshow : styles.coveragemain}>
        <div className={styles.Mian1}>
          <h6 className={styles.Main1h}>
            rade over-the counter (OTC) crypto assets and tokens P2P via an
            integrated <br /> ESC (escrow smart contract) functionality.
          </h6>

          <Image src="/amb.png" width={500} height={110} />
        </div>

        <div className={styles.Mian2}>
          <h6 className={styles.Main2h}>
            Safely invest in validated crypto projects and communicate via smart
            public channels <br /> the newest updates and trends.
          </h6>

          <Image src="/btc.png" width={350} height={110} />
        </div>
        {show && (
          <>
            <div className={styles.Mian2}>
              <h6 className={styles.Main2h}>
                Safely invest in validated crypto projects and communicate via
                smart public channels <br /> the newest updates and trends.
              </h6>

              <Image src="/btc.png" width={350} height={110} />
            </div>

            <div className={styles.Mian2}>
              <h6 className={styles.Main2h}>
                Safely invest in validated crypto projects and communicate via
                smart public channels <br /> the newest updates and trends.
              </h6>

              <Image src="/btc.png" width={350} height={110} />
            </div>

            <div className={styles.Mian2}>
              <h6 className={styles.Main2h}>
                Safely invest in validated crypto projects and communicate via
                smart public channels <br /> the newest updates and trends.
              </h6>

              <Image src="/btc.png" width={350} height={110} />
            </div>

            <div className={styles.Mian2}>
              <h6 className={styles.Main2h}>
                Safely invest in validated crypto projects and communicate via
                smart public channels <br /> the newest updates and trends.
              </h6>

              <Image src="/btc.png" width={350} height={110} />
            </div>

            <div className={styles.Mian2}>
              <h6 className={styles.Main2h}>
                Safely invest in validated crypto projects and communicate via
                smart public channels <br /> the newest updates and trends.
              </h6>

              <Image src="/btc.png" width={350} height={110} />
            </div>
          </>
        )}
      </div>

      <button className={styles.coveragebtn}>
        <span
          className={styles.btnbtn}
          onClick={() => setShow((show) => !show)}
        >
          {show ? "Show Less" : "Show More"}
        </span>
      </button>
    </div>
  );
};

export default Coverage;
