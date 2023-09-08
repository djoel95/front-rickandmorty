import React, { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Register from "./components/Form/Register";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Favorites from "./components/Favorites/Favorites";
import Characters from "./components/Characters/Characters";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const URL_BASE = "https://back-rickandmorty.onrender.com/rickandmorty/";
  const API_Key = "henrym-djoel95";
  const onSearch = async (id) => {
    if (!id && isNaN(id)) alert("Ingrese un ID");
    if (characters.some((chart) => chart.id === Number(id)))
      return alert("El personaje ya existe");
    try {
      const { data } = await axios(`${URL_BASE}character/${id}`);
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  async function login(userData) {
    const { email, password } = userData;
    try {
      const { data } = await axios.get(
        `${URL_BASE}login/?email=${email}&password=${password}`
      );

      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  }

  const onClose = (id) => {
    const characterFilter = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(characterFilter);
  };
  const location = useLocation();
  const handleRandomCard = () => {
    axios("https://rickandmortyapi.com/api/character").then(({ data }) => {
      const randomCharacter =
        data.results[Math.floor(Math.random() * data.results.length)];
      if (
        randomCharacter &&
        !characters.some((char) => char.id === randomCharacter.id)
      ) {
        setCharacters((oldChars) => [...oldChars, randomCharacter]);
      }
    });
  };

  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/register" && (
        <Nav onSearch={onSearch} onRandomCard={handleRandomCard} />
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
          path="/characters"
          element={<Characters characters={characters} onClose={onClose} />}
        />

        <Route
          path="/favorites"
          element={
            <Favorites myFavorites={characters} removeFavorite={onClose} />
          }
        />

        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
