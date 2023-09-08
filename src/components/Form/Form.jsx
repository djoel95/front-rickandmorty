import { useState, createRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Form.module.css";
import instagram from "../../assets/instagram.png";
import linkel from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import Register from "./Register";
import { Link } from "react-router-dom";
import validateForm from "./validation";


const Form = ({login}) => {

  const navigate = useNavigate();
  const initialFormState = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData ({...userData, [name]: value});
    setErrors(validateForm({ ...userData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
    // if (Object.keys(validationErrors).length === 0) {
    //   console.log("Formulario enviado");
    // }
    // navigate("/home");
  };

  const containerRef = createRef();

  const handleToggleRegisterForm = () => {
    setShowRegisterForm(true);
  };

  const handleReset = () => {
    setUserData(initialFormState);
    setErrors({});
  };

  

  return (
    <div className={style.containerForm} id="container" ref={containerRef}>
      <form onSubmit={handleSubmit} className={style.container}>
        <h1>Login</h1>
        <div className={style.socialContainer}>
          <a href="https://www.github.com/djoel95">
            <img src={github} alt="" className={style.img} />
          </a>
          <a href="https://www.instagram.com/tuttibollitosccs/">
            <img src={instagram} alt="" className={style.img} />
          </a>
          <a href="https://www.linkedin.com/in/joel-alejandro-lopez-guillen-2195121a2/">
            <img src={linkel} alt="" className={style.img} />
          </a>
        </div>

        <div className={style.containerLabel}>
          <label htmlFor="email" className={style.label}>
            Email:
          </label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={errors.username ? style.inputError : ""}
          />
          {errors.username && (
            <span className={style.error}>{errors.username}</span>
          )}
        </div>
        <div className={style.containerLabel}>
          <label htmlFor="password" className={style.label}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={errors.password ? style.inputError : ""}
          />
          {errors.password && (
            <span className={style.error}>{errors.password}</span>
          )}
        </div>
        <span>or use your email for registration</span>
        <div className={style.containerButton}>
         
            <button type="submit" className={style.button}>
              Sign in
            </button>
        
          <button type="reset" className={style.button} onClick={handleReset}>
            Reset
          </button>
          <Link to="/register">
            <button
              type="button"
              className={style.button}
              onClick={handleToggleRegisterForm}>
              Sign Up
            </button>
          </Link>
          {showRegisterForm && registerForm}
        </div>
      </form>
    </div>
  );
};

export default Form;
