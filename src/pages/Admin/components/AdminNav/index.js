import { NavLink } from "react-router-dom";
import styles from "./AdminNav.module.scss";

function AdminNav() {
  return (
    <div className={`${styles.adminNav} h-100`}>
      <nav className={`${styles.adminNav__nav}`}>
        <NavLink
          to="recettes"
          className={({ isActive }) =>
            isActive
              ? "btn btn--filled btn--primary no-underline mb-3"
              : "btn btn--outlined btn--primary no-underline mb-3"
          }
        >
          Recettes
        </NavLink>
        <NavLink
          to="utilisateurs"
          className={({ isActive }) =>
            isActive
              ? "btn btn--filled btn--primary no-underline"
              : "btn btn--outlined btn--primary no-underline"
          }
        >
          Utilisateurs
        </NavLink>
      </nav>
    </div>
  );
}

export default AdminNav;
