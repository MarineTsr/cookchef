import styles from "./Loader.module.scss";
import loader from "assets/images/loader.gif";

function Loader({classes}: { classes?: string }) {
    return (
        <p className={`${styles.loader} ${classes}`}>
            <img src={loader} alt="Chargement"/>
        </p>
    );
}

export default Loader;
