import styles from "./Loader.module.scss";
import loader from "assets/images/loader.gif";

function Loader({classes}) {
  return (
    <p className={`${styles.loader} ${classes}`}>
      <img src={loader} alt="Chargement" />
      <span>Chargement en cours</span>
    </p>
  );
}

export default Loader;
