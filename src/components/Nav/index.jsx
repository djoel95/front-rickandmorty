import styles from "./styles.module.css";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import logotipo from "../../assets/logo2.gif";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAuth } from "../../store/actions";

const Nav = () => {
  const location = useLocation();
  const dispatch = useDispatch()
  return (
    <div className={styles.containerNavHeader}>
      <nav className={styles.nav}>
        <div className={styles.containerNav}>
          <Link to="/" onClick={() => dispatch(logoutAuth())}>
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
              <SearchBar />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

//<Link to="/home" ><img className={styles.logo} src={logo} alt=""/></Link>
