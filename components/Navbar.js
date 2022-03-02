import Link from "next/link";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" width={250} height={150} />
          </Link>
        </div>

        <ul className={styles.ul}>
          <li>
            <a href="https://covalent-eight.vercel.app/assets/litepaper.pdf">
              Pitch Deck
            </a>
          </li>

          <li>
            <a className="cool-link" href="#section2">
              Features
            </a>
          </li>

          <li>
            <a href="#section1">Venture</a>
          </li>

          <li>
            <a href="#section3">Coverage</a>
          </li>

          <li>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>More</button>
              <div className={styles.dropdowncontent}>
                <a href="#section4">FAQs</a>
                <a href="#section5">RoadMap</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
