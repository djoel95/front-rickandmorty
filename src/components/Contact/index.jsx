import React, { useState } from "react";
import style from "./styles.module.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario de contacto enviado");
    // Luego, puedes reiniciar el formulario si es necesario
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={style.containerForm}>
      <form onSubmit={handleSubmit} className={style.container}>
        <h1>Contact Us</h1>
        <div className={style.containerLabel}>
          <label htmlFor="name" className={style.label}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className={style.containerLabel}>
          <label htmlFor="email" className={style.label}>
            Email:
          </label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className={style.containerLabel}>
          <label htmlFor="message" className={style.label}>
            Message:
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            maxLength={100}
          />
        </div>
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
