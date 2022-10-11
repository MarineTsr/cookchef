import styles from "./Header.module.scss";
import logo from "../assets/images/cookchef.png";

function Header() {
  return (
    <header
      className={`${styles.headerMain} d-flex flex-row align-items-center justify-content-between`}
    >
      <button className="burger">
        <i className="fa-solid fa-bars"></i>
      </button>

      <h1 className={`${styles.headerMain__logo} mb-0`}>
        <img src={logo} alt="Logo CookChef" />
      </h1>

      <div className="d-flex">
        <button type="button" className="btn btn--outlined btn--primary">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="ml-2">Mon panier</span>
        </button>
        <button
          type="button"
          className="btn btn--filled btn--primary ml-3 ml-lg-4"
        >
          <i className="fa-solid fa-user"></i>
          <span className="ml-2">Connexion</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
