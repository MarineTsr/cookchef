import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={`${styles.footerMain}`}>
      <p className={`${styles.footerMain__copyright} text-center`}>
        Copyright © 2022 Marine Tsr
      </p>
    </footer>
  );
}

export default Footer;
