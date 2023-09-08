import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { removeFav, orderCards, filterCards } from "../../redux/actions";
import styles from "./Favorites.module.css";

const Favorites = ({ myFavorites, removeFavorite }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleFavorite = (id, removeFavorite) => {
    removeFavorite(id);
  };
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
            key={favorite.id}
            name={favorite.name}
            status={favorite.status}
            species={favorite.species}
            gender={favorite.gender}
            image={favorite.image}
            id={favorite.id}
            onClose={() => handleFavorite(favorite.id, removeFavorite)}
            className={styles.card}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => dispatch(removeFav(id)),
    orderCards: (order) => dispatch(orderCards(order)),
    filterCards: (gender) => dispatch(filterCards(gender)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
