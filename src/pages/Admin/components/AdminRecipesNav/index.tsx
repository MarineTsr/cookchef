import { NavLink } from "react-router-dom";
import styles from "./AdminRecipesNav.module.scss";

function AdminRecipesNav() {
  return (
    <nav className={styles.adminRecipesNav}>
      <NavLink
        to="liste"
        className={({ isActive }) => (isActive ? "text-color--primary" : "")}
      >
        Liste
      </NavLink>
      <NavLink
        to="ajouter"
        className={({ isActive }) => (isActive ? "text-color--primary" : "")}
      >
        Ajouter
      </NavLink>
    </nav>
  );
}

export default AdminRecipesNav;
