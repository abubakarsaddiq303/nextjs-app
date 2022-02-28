import Image from "next/image";
const Roadmap = () => {
  return (
    <div className="roadmap" id="section5">
      <h1 className="roadmap-h">ROADMAP</h1>

      <div className="roadmap-topics1">
        <div className="topic-1">
          Trade over-the counter (OTC) crypto assets and tokens P2P via an
          integrated ESC (escrow smart contract) functionality.
        </div>

        <div className="topic-2">
          Trade over-the counter (OTC) crypto assets and tokens P2P via an
          integrated ESC (escrow smart contract) functionality.
        </div>

        <div className="topic-3">
          Trade over-the counter (OTC) crypto assets and tokens P2P via an
          integrated ESC (escrow smart contract) functionality.
        </div>
      </div>

      <div className="roadmap-img">
        <Image src="/neww.png" width={450} height={250} />
      </div>

      <div className="roadmap-topics2">
        <div className="topic-p1">
          Trade over-the counter (OTC) crypto assets and tokens P2P via an
          integrated ESC (escrow smart contract) functionality.
        </div>

        <div className="topic-p2">
          Trade over-the counter (OTC) crypto assets and tokens P2P via an
          integrated ESC (escrow smart contract) functionality.
        </div>

        <div className="topic-p3">
          Trade over-the counter (OTC) crypto assets and tokens P2P via an
          integrated ESC (escrow smart contract) functionality.
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
