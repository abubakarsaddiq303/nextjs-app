import Image from "next/image";
import { useState } from "react";
const Coverage = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="coverage" id="section3">
      <h1 className="coverage-h">EXCLUSIVE COVERAGE</h1>

      <div className={show ? "coverage-mainshow" : "coverage-main"}>
        <div className="Mian-1">
          <h6 className="Main-1-h">
            rade over-the counter (OTC) crypto assets and tokens P2P via an
            integrated <br /> ESC (escrow smart contract) functionality.
          </h6>
          <Image src="/amb.png" width={500} height={110} />
        </div>

        <div className="Mian-2">
          <h6 className="Main-2-h">
            Safely invest in validated crypto projects and communicate via smart
            public channels <br /> the newest updates and trends.
          </h6>

          <Image src="/btc.png" width={350} height={110} />
        </div>
        {show && (
          <>
            <div className="Mian-2">
              <h6 className="Main-2-h">
                Safely invest in validated crypto projects and communicate via
                smart public channels <br /> the newest updates and trends.
              </h6>

              <Image src="/btc.png" width={350} height={110} />
            </div>

            <div className="Mian-2">
              <h6 className="Main-2-h">
                Safely invest in validated crypto projects and communicate via
                smart public channels <br /> the newest updates and trends.
              </h6>

              <Image src="/btc.png" width={350} height={110} />
            </div>

            <div className="Mian-2">
              <h6 className="Main-2-h">
                Safely invest in validated crypto projects and communicate via
                smart public channels <br /> the newest updates and trends.
              </h6>

              <Image src="/btc.png" width={350} height={110} />
            </div>

            <div className="Mian-2">
              <h6 className="Main-2-h">
                Safely invest in validated crypto projects and communicate via
                smart public channels <br /> the newest updates and trends.
              </h6>

              <Image src="/btc.png" width={350} height={110} />
            </div>

            <div className="Mian-2">
              <h6 className="Main-2-h">
                Safely invest in validated crypto projects and communicate via
                smart public channels <br /> the newest updates and trends.
              </h6>

              <Image src="/btc.png" width={350} height={110} />
            </div>
          </>
        )}
      </div>

      <button className="coverage-btn">
        <span className="btn-btn" onClick={() => setShow((show) => !show)}>
          {show ? "Show Less" : "Show More"}
        </span>
      </button>
    </div>
  );
};

export default Coverage;
