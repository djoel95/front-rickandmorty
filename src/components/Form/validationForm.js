const validateRegister = (userData) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  
    if (userData.firstName.trim() === "") {
      errors.firstName = "El nombre es requerido";
    } else if (!nameRegex.test(userData.firstName)) {
      errors.firstName = "El nombre solo debe contener letras";
    }
  
    if (userData.lastName.trim() === "") {
      errors.lastName = "El apellido es requerido";
    } else if (!nameRegex.test(userData.lastName)) {
      errors.lastName = "El apellido solo debe contener letras";
    }
  
    if (userData.gender.trim() === "") {
      errors.gender = "El género es requerido";
    }
  
    if (userData.birthDate.trim() === "") {
      errors.birthDate = "La fecha de nacimiento es requerida";
    }
  
    if (userData.email.trim() === "") {
      errors.email = "El correo electrónico es requerido";
    } else if (!emailRegex.test(userData.email)) {
      errors.email = "El correo electrónico no es válido";
    }
  
    if (userData.password.trim() === "") {
      errors.password = "La contraseña es requerida";
    } else if (!passwordRegex.test(userData.password)) {
      errors.password =
        "La contraseña debe tener al menos 6 caracteres, una letra mayúscula y un número";
    }
  
  };

export default validateRegister;