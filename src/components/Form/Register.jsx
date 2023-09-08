import { useState } from "react";
import style from "./Register.module.css";
import {  Link, useNavigate } from "react-router-dom";


const Register = ({}) => {
  const navigate = useNavigate();
  const initialFormState = {
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData ({...userData, [name]: value});
    setErrors(validateForm({ ...userData, [name]: value }));
  };

  // const handleCreate = (event) => {
  //   event.preventDefault();
  //   const validationErrors = validateForm(form);
  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     console.log("Formulario enviado");
  //   }
    
  // }

 


  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Guardar los datos en el backend usando la función createUsers
        await axios.post("", {
          firstName: userData.firstName,
          lastName: userData.lastName,
          gender: userData.gender,
          birthDate: userData.birthDate,
          email: userData.email,
          password: userData.password,
        });
        // Redirigir al usuario a la página de inicio de sesión
        navigate("/");
      } catch (error) {
        console.error("Error al guardar los datos en el backend:", error);
      }
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (formData.firstName.trim() === "") {
      errors.firstName = "El nombre es requerido";
    } else if (!nameRegex.test(formData.firstName)) {
      errors.firstName = "El nombre solo debe contener letras";
    }

    if (formData.lastName.trim() === "") {
      errors.lastName = "El apellido es requerido";
    } else if (!nameRegex.test(formData.lastName)) {
      errors.lastName = "El apellido solo debe contener letras";
    }

    if (formData.gender.trim() === "") {
      errors.gender = "El género es requerido";
    }

    if (formData.birthDate.trim() === "") {
      errors.birthDate = "La fecha de nacimiento es requerida";
    }

    if (formData.email.trim() === "") {
      errors.email = "El correo electrónico es requerido";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "El correo electrónico no es válido";
    }

    if (formData.password.trim() === "") {
      errors.password = "La contraseña es requerida";
    } else if (!passwordRegex.test(formData.password)) {
      errors.password =
        "La contraseña debe tener al menos 6 caracteres, una letra mayúscula y un número";
    }

    return errors;
  };
  return (
    <div className={style.containerForm}>
      <form onSubmit={handleSubmit} className={style.container}>
      <h1>Register</h1>
        <div className={style.containerLabel}>
          <label htmlFor="firstName" className={style.label}>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            className={errors.firstName ? style.inputError : ""}
          />
          {errors.firstName && (
            <span className={style.error}>{errors.firstName}</span>
          )}
        </div>
        <div className={style.containerLabel}>
          <label htmlFor="lastName" className={style.label}>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            className={errors.lastName ? "input-error" : ""}
          />
          {errors.lastName && <span className={style.error}>{errors.lastName}</span>}
        </div>
        <div className={style.containerLabel}>
          <label htmlFor="gender" className={style.label}>Gender:</label>
          <select
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            className={errors.gender ? "input-error" : ""}>
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className={style.error}>{errors.gender}</span>}
        </div>
        <div className={style.containerLabel}>
          <label htmlFor="birthDate" className={style.label}>Birth Date:</label>
          <input
            type="date"
            name="birthDate"
            value={userData.birthDate}
            onChange={handleChange}
            className={errors.birthDate ? "input-error" : ""}
          />
          {errors.birthDate && (
            <span className={style.error}>{errors.birthDate}</span>
          )}
        </div>
        <div className={style.containerLabel}>
          <label htmlFor="email" className={style.label}>Email:</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className={style.error}>{errors.email}</span>}
        </div>
        <div className={style.containerLabel}>
          <label htmlFor="password" className={style.label}>Password:</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <span className={style.error}>{errors.password}</span>}
        </div>
            <Link to="/">
        <button  className={style.button} type="submit"  >Register</button>
            </Link>
    
      </form>
    </div>
  );
};

export default Register;
