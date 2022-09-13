import styles from "./Navbar.module.css";

import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const data = ["Coins", "Exchanges", "Swap"];

function Navbar() {
  return (
    <div className={styles.navbar}>
      <article className={styles.overlay}>
        <section className={styles.left}>
          {data.map((item) => (
            <span key={item} className={`commonPadding ${styles.item}`}>
              {item}
            </span>
          ))}
        </section>

        <a href="https://coincap.io">
          <img
            src="https://coincap.io/static/logos/black.svg"
            alt="logo"
            className={styles.img}
          />
        </a>

        <section className={styles.right}>
          <div className={`commonPadding ${styles.icon}`}>
            <FaSearch />
          </div>
          <div className={`commonPadding ${styles.icon}`}>
            <IoMdSettings />
          </div>
          <button className="btn">Connect Wallet</button>
        </section>
      </article>
    </div>
  );
}

export default Navbar;
