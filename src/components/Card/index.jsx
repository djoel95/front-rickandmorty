import React from 'react';
import style from './styles.module.css';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { useEffect } from 'react';

const Card = ({ name, status, species, gender, image, id, addFavorite, removeFavorite }) => {
  const [isFav, setIsFav] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const { myFavorites } = useSelector((state) => state.character);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id.toString());
    } else {
      setIsFav(true);
      addFavorite({ name, status, species, gender, image, id });
    }
  };

  useEffect(() => {
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === id) {
        setIsFav(true);
        break;
      }
    }
  }, [myFavorites]);

  const onClose = (id) => {

  }

  return (
    <div
      className={style.cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <>
          <button className={style.btnCard} onClick={() => onClose(id)}>X</button>
          <button className={style.btnFav} onClick={handleFavorite}>
            {isFav ? '❤️' : '🤍'}
          </button>
          <h2>{name}</h2>
        </>
      )}
      <Link to={`/detail/${id}`}>
        <img className={style.cardImage} src={image} alt='imagenCard' />
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => dispatch(addFav(character)),
    removeFavorite: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);