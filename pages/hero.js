import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero" id="section">
      <Navbar />
      <div className="hero-container">
        <div className="hero-l">
          <div className="hero-p">
            <h3>
              Litepaper Whitepaper Functionality Comparison Team Revolutionary
              Secure Messaging & Trading Dapp powered by Solana
            </h3>
          </div>
          <div className="hero-buttons">
            <button className="btn-1">Join</button>
            <button className="btn-2">
              <Link href="https://covalent-eight.vercel.app/assets/litepaper.pdf">
                <a> Litepaper</a>
              </Link>
            </button>
          </div>
        </div>
        <div className="hero-r">
          <div className="hero-img">
            <Image src="/nj.png" width={400} height={450} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
