import React, { useState, useEffect } from "react";
import TablaPaginacion from "../TablaPaginacion/TablaPaginacion";
import style from "./styles.module.css";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${currentPage}`
        );
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.cardsContainer}>
      <div className={style.table}>
        <TablaPaginacion
          totalPages={totalPages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
      <table className={style.table}>

        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Species</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr key={character.id}>
              <th scope="row">{character.id}</th>
              <td>{character.name}</td>
              <td>{character.status}</td>
              <td>{character.species}</td>
              <td>
                <img src={character.image} alt={character.name} className={style.img} />
              </td>
            </tr>
          ))}
        </tbody>
      </table >

    </div>
  );
};

export default Characters;
