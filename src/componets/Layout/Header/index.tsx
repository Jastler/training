import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/counter"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo-app"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Todo App
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
