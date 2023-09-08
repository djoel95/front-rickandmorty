export const validateForm = (userData) => {
  const errors = {};
  const usernameRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const expresionRegular = /^(?=.{1,35}$).+/;
  const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/;

  if (userData.username.trim() === "") {
    errors.username = "El nombre de usuario es requerido";
  } else if (!usernameRegex.test(userData.username)) {
    errors.username = "El nombre de usuario no es válido";
  }

  if (userData.password.trim() === "") {
    errors.password = "La contraseña es requerida";
  } else if (!regexPassword.test(userData.password)) {
    errors.password = "La contraseña del usuario no es válida";
  }

  return errors;
};
