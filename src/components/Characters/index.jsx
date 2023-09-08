import React, { useState, useEffect } from "react";
import TablaPaginacion from "../TablaPaginacion";
import style from "./styles.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getPaginateCharacters } from "../../store/actions";

const Characters = () => {

  const { paginateCharacters } = useSelector((state) => state.character)
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getPaginateCharacters(currentPage));
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <div className={style.cardsContainer}>
      <div className={style.table}>
        <TablaPaginacion
          totalPages={paginateCharacters?.info?.pages || 0}
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
          {paginateCharacters?.results?.map((character) => (
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
