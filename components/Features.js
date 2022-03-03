import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import styles from "../styles/Feature.module.css";

const Features = () => {
  return (
    <div className={styles.corefeature} id="section2">
      <div className={styles.core_h}>
        <h1 className={styles.core_head1}>
          Core <br />
          <span className={styles.core_head2}>FEATURES</span>
        </h1>

        <p className={styles.core_p}>
          No centralized data storage. No privacy issues. No censorship.
          <br />
          You’re the only one who’s able to access and manage your messages.
        </p>
      </div>

      <div>
        <div className={styles.core_container}>
          <div className={styles.core_row}>
            <div id="cols" className="mb-5 col-md-4 col-sm-12">
              <div className={styles.card1}>
                <Image src="/unified.png" width={80} height={80} />
              </div>

              <h4 className={styles.card_h}>Unified Platform</h4>
              <div className={styles.card_p}>
                Trade over-the-counter (OTC) crypto <br /> assets and tokens P2P
                via an integrated <br /> ESC (escrow smart contract)
                functionality.
              </div>
            </div>

            <div id="cols" className="mb-5 col-md-4 col-sm-12">
              <div className={styles.card1}>
                <Image src="/realTime.png" width={80} height={80} />
              </div>

              <h4 className={styles.card_h}>Realtime Trading</h4>
              <div className={styles.card_p}>
                Safely invest in validated crypto projects <br /> and
                communicate via smart public <br /> channels the newest updates
                and trends.
              </div>
            </div>

            <div id="cols" className="mb-5 col-md-4 col-sm-12">
              <div className={styles.card1}>
                <Image src="/secure.png" width={80} height={80} />
              </div>

              <h4 className={styles.card_h}>Secure Trading</h4>
              <div className={styles.card_p}>
                Safely invest in validated crypto projects <br /> and
                communicate via smart public <br /> channels the newest updates
                and trends.
              </div>
            </div>

            <div id="cols" className="mb-5 col-md-4 col-sm-12">
              <div className={styles.card1}>
                <Image src="/bots.png" width={80} height={80} />
              </div>

              <h4 className={styles.card_h}>Premium Automated Bots</h4>
              <div className={styles.card_p}>
                Safely invest in validated crypto projects <br /> and
                communicate via smart public <br /> channels the newest updates
                and trends.
              </div>
            </div>

            <div id="cols" className="mb-5 col-md-4 col-sm-12">
              <div className={styles.card1}>
                <Image src="/integration.png" width={80} height={80} />
              </div>

              <h4 className={styles.card_h}>Seamless Integration</h4>
              <div className={styles.card_p}>
                Safely invest in validated crypto projects <br /> and
                communicate via smart public <br /> channels the newest updates
                and trends.
              </div>
            </div>

            <div id="cols" className="mb-5 col-md-4 col-sm-12">
              <div className={styles.card1}>
                <Image src="/dexxxx.png" width={80} height={80} />
              </div>

              <h4 className={styles.card_h}>Dex Integrations</h4>
              <div className={styles.card_p}>
                Trade over-the-counter (OTC) crypto <br /> assets and tokens P2P
                via an integrated <br /> ESC (escrow smart contract)
                functionality.
              </div>
            </div>

            <div id="cols" className="mb-5 col-md-4 col-sm-12">
              <div className={styles.card1}>
                <Image src="/assist.png" width={80} height={80} />
              </div>

              <h4 className={styles.card_h}>Assistance Services For Traders</h4>
              <div className={styles.card_p}>
                Trade over-the-counter (OTC) crypto <br /> assets and tokens P2P
                via an integrated <br /> ESC (escrow smart contract)
                functionality.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
