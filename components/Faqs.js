import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Faqs.module.css";

const Faqs = () => {
  const [show1, setShow1] = useState(false);

  const [show2, setShow2] = useState(false);

  const [show3, setShow3] = useState(false);

  const [show4, setShow4] = useState(false);

  const [show5, setShow5] = useState(false);

  const [show6, setShow6] = useState(false);

  return (
    <div className={styles.faqs} id="section4">
      <h1 className={styles.faqsh}>FAQs</h1>

      <div className={styles.faqsmain}>
        <div>
          <div
            className={styles.Q1}
            onClick={() => setShow1((show1) => !show1)}
          >
            <p className={styles.Q1p}>How are we different from others</p>

            <svg
              width="24px"
              height="24px"
              viewBox="0 0 320 512"
              id="b80c53a0-fbf6-4494-bbaf-81c896ec0e14"
              data-name="Livello 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="rgb(255, 158, 68)"
                d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
              />
            </svg>
          </div>

          {show1 && (
            <p className={styles.faqsp}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
              ad minim veniam
            </p>
          )}
        </div>

        <div>
          <div
            className={styles.Q1}
            onClick={() => setShow2((show2) => !show2)}
          >
            <p className={styles.Q1p}>
              How are we different from others and how do we work,what are our
              methods
            </p>

            <svg
              width="24px"
              height="24px"
              viewBox="0 0 320 512"
              id="b80c53a0-fbf6-4494-bbaf-81c896ec0e14"
              data-name="Livello 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="rgb(255, 158, 68)"
                d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
              />
            </svg>
          </div>

          {show2 && (
            <p className={styles.faqsp}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
              ad minim veniam
            </p>
          )}
        </div>

        <div>
          <div
            className={styles.Q1}
            onClick={() => setShow3((show3) => !show3)}
          >
            <p className={styles.Q1p}>How are we different from others</p>

            <svg
              width="24px"
              height="24px"
              viewBox="0 0 320 512"
              id="b80c53a0-fbf6-4494-bbaf-81c896ec0e14"
              data-name="Livello 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="rgb(255, 158, 68)"
                d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
              />
            </svg>
          </div>

          {show3 && (
            <p className={styles.faqsp}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
              ad minim veniam
            </p>
          )}
        </div>

        <div>
          <div
            className={styles.Q1}
            onClick={() => setShow4((show4) => !show4)}
          >
            <p className={styles.Q1p}>How are we different from others</p>

            <svg
              width="24px"
              height="24px"
              viewBox="0 0 320 512"
              id="b80c53a0-fbf6-4494-bbaf-81c896ec0e14"
              data-name="Livello 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="rgb(255, 158, 68)"
                d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
              />
            </svg>
          </div>

          {show4 && (
            <p className={styles.faqsp}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
              ad minim veniam
            </p>
          )}
        </div>

        <div>
          <div
            className={styles.Q1}
            onClick={() => setShow5((show5) => !show5)}
          >
            <p className={styles.Q1p}>How are we different from others</p>

            <svg
              width="24px"
              height="24px"
              viewBox="0 0 320 512"
              id="b80c53a0-fbf6-4494-bbaf-81c896ec0e14"
              data-name="Livello 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="rgb(255, 158, 68)"
                d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
              />
            </svg>
          </div>

          {show5 && (
            <p className={styles.faqsp}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
              ad minim veniam
            </p>
          )}
        </div>

        <div>
          <div
            className={styles.Q1}
            onClick={() => setShow6((show6) => !show6)}
          >
            <p className={styles.Q1p}>How are we different from others</p>

            <svg
              width="24px"
              height="24px"
              viewBox="0 0 320 512"
              id="b80c53a0-fbf6-4494-bbaf-81c896ec0e14"
              data-name="Livello 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="rgb(255, 158, 68)"
                d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"
              />
            </svg>
          </div>

          {show6 && (
            <p className={styles.faqsp}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
              ad minim veniam
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
