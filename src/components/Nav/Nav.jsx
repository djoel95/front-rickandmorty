import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import logotipo from "../../assets/logo2.gif";
import { useLocation } from "react-router-dom";

const Nav = ({ onSearch, onRandomCard }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className={styles.containerNavHeader}>
      <nav className={styles.nav}>
        <div className={styles.containerNav}>
          <Link to="/">
            <img className={styles.logo} src={icon} alt="" />
          </Link>
          <Link to="/home">
            <img className={styles.logo2} src={logotipo} alt="" />
          </Link>
          <div className={styles.containerNavBtn}>
            <Link
              to="/home"
              className={
                location.pathname === "/home" ? styles.btnActive : styles.btn
              }>
              Home
            </Link>
            <Link
              to="/characters"
              className={
                location.pathname === "/characters" ? styles.btnActive : styles.btn
              }>
              Character
            </Link>
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? styles.btnActive : styles.btn
              }>
              About
            </Link>
            <Link
              to="/favorites"
              className={
                location.pathname === "/favorites"
                  ? styles.btnActive
                  : styles.btn
              }>
              Favorites
            </Link>
            <Link
              to="/contact"
              className={
                location.pathname === "/contact" ? styles.btnActive : styles.btn
              }>
              Contact
            </Link>
            <div className={styles.navBar}>
              <SearchBar onSearch={onSearch} onRandomCard={onRandomCard} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

//<Link to="/home" ><img className={styles.logo} src={logo} alt=""/></Link>
