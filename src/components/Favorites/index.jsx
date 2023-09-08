import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import styles from "./styles.module.css";
import { filterCards, orderCards } from "../../store/actions";

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const { myFavorites } = useSelector((state) => state.character);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <select onChange={handleOrder} className={styles.selectBtn}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter} className={styles.selectBtn}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={styles.cardsContainer}>
        {myFavorites.map((favorite) => (
          <Card
            favorite={true}
            key={favorite.id}
            name={favorite.name}
            status={favorite.status}
            species={favorite.species}
            gender={favorite.gender}
            image={favorite.image}
            id={favorite.id}
            className={styles.card}
            character={favorite}
          />
        ))}
      </div>
    </div>
  );
};


export default Favorites;
