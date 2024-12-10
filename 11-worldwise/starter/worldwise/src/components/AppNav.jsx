import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <NavLink to="countries">Countries</NavLink>
      </ul>
    </div>
  );
}

export default AppNav;
