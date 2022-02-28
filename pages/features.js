import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";

const Features = () => {
  return (
    <div className="corefeature" id="section2">
      <div className="core-h">
        <h1 className="core-head1">
          Core <br />
          <span className="core-head2">FEATURES</span>
        </h1>

        <p className="core-p">
          No centralized data storage. No privacy issues. No censorship.
          <br />
          You’re the only one who’s able to access and manage your messages.
        </p>
      </div>

      <div>
        <div className="core-container">
          <div className="core-row">
            <div id="cols" class="mb-5 col-md-4 col-sm-12">
              <div className="card1">
                <Image src="/unified.png" width={80} height={80} />
              </div>

              <h4 className="card-h">Unified Platform</h4>
              <div className="card-p">
                Trade over-the-counter (OTC) crypto <br /> assets and tokens P2P
                via an integrated <br /> ESC (escrow smart contract)
                functionality.
              </div>
            </div>

            <div id="cols" class="mb-5 col-md-4 col-sm-12">
              <div className="card1">
                <Image src="/realTime.png" width={80} height={80} />
              </div>

              <h4 className="card-h">Realtime Trading</h4>
              <div className="card-p">
                Safely invest in validated crypto projects <br /> and
                communicate via smart public <br /> channels the newest updates
                and trends.
              </div>
            </div>

            <div id="cols" class="mb-5 col-md-4 col-sm-12">
              <div className="card1">
                <Image src="/secure.png" width={80} height={80} />
              </div>

              <h4 className="card-h">Secure Trading</h4>
              <div className="card-p">
                Safely invest in validated crypto projects <br /> and
                communicate via smart public <br /> channels the newest updates
                and trends.
              </div>
            </div>

            <div id="cols" class="mb-5 col-md-4 col-sm-12">
              <div className="card1">
                <Image src="/bots.png" width={80} height={80} />
              </div>

              <h4 className="card-h">Premium Automated Bots</h4>
              <div className="card-p">
                Safely invest in validated crypto projects <br /> and
                communicate via smart public <br /> channels the newest updates
                and trends.
              </div>
            </div>

            <div id="cols" class="mb-5 col-md-4 col-sm-12">
              <div className="card1">
                <Image src="/integration.png" width={80} height={80} />
              </div>

              <h4 className="card-h">Seamless Integration</h4>
              <div className="card-p">
                Safely invest in validated crypto projects <br /> and
                communicate via smart public <br /> channels the newest updates
                and trends.
              </div>
            </div>

            <div id="cols" class="mb-5 col-md-4 col-sm-12">
              <div className="card1">
                <Image src="/dexxxx.png" width={80} height={80} />
              </div>

              <h4 className="card-h">Dex Integrations</h4>
              <div className="card-p">
                Trade over-the-counter (OTC) crypto <br /> assets and tokens P2P
                via an integrated <br /> ESC (escrow smart contract)
                functionality.
              </div>
            </div>

            <div id="cols" class="mb-5 col-md-4 col-sm-12">
              <div className="card1">
                <Image src="/assist.png" width={80} height={80} />
              </div>

              <h4 className="card-h">Assistance Services For Traders</h4>
              <div className="card-p">
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
