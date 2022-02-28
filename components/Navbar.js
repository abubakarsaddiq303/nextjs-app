import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav id="myNavbar">
        <div className="logo">
          <Link href="/">
            <Image src="/logo.png" width={250} height={150} />
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <li className="Listborder">
              <a
                href="https://covalent-eight.vercel.app/assets/litepaper.pdf"
                target="_blank"
              >
                Pitch Deck
              </a>
            </li>
            <li>
              <a href="#section2">Features</a>
            </li>
            <li>
              <a href="#section1">Venture</a>
            </li>
            <li>
              <a href="#section3">Coverage</a>
            </li>

            <li>
              <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                  <a href="#section4">FAQs</a>
                  <a href="#section5">RoadMap</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
