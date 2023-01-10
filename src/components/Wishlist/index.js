import styles from "./Wishlist.module.scss";
function Wishlist() {
  return (
    <div className={`${styles.wishlist}`}>
      <div className={`${styles.wishlist__container}`}>
        <p className="h3">Wishlist</p>
      </div>
    </div>
  );
}

export default Wishlist;
