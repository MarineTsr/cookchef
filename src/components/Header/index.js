import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "assets/images/cookchef.png";

function Header() {
  return (
    <header
      className={`${styles.headerMain} d-flex flex-row align-items-center justify-content-between`}
    >
      <h1 className={`${styles.headerMain__logo} mb-0`}>
        <NavLink end to="/" title="CookChef">
          <img src={logo} alt="Logo CookChef" />
        </NavLink>
      </h1>

      <div className="d-flex ml-4">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive
              ? "btn btn--filled btn--primary no-underline"
              : "btn btn--outlined btn--primary no-underline"
          }
          title="Admin"
        >
          <i className="icon fa-solid fa-circle-plus"></i>
          <span className="ml-2 d-none d-sm-inline">Admin</span>
        </NavLink>
        <button
          type="button"
          className="btn btn--outlined btn--primary ml-3 ml-lg-4"
          title="Ma wishlist"
        >
          <i className="icon fa-solid fa-heart"></i>
          <span className="ml-2 d-none d-sm-inline">Ma wishlist</span>
        </button>
        <button
          type="button"
          className="btn btn--outlined btn--primary ml-3 ml-lg-4"
          title="Connexion"
        >
          <i className="fa-solid fa-user"></i>
          <span className="ml-2 d-none d-sm-inline">Connexion</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
