import React, { useEffect } from 'react';
import style from './styles.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCharacter, setToggleFavorite } from '../../store/actions';

const Card = ({ name, status, species, gender, image, id, character, favorite }) => {
  const [isFav, setIsFav] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const dispatch = useDispatch()
  const { myFavorites } = useSelector((state) => state.character);

  useEffect(() => {
    if (myFavorites.some((char) => char.id === String(character.id))) {
      setIsFav(true)
    } else {
      setIsFav(false)
    }
  }, [myFavorites.length])


  const onClose = (id) => {
    dispatch(removeCharacter(id))
  }

  const handleFavorite = () => {
    dispatch(setToggleFavorite(character))
  }

  return (
    <div
      className={style.cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <>
          {!favorite && <button className={style.btnCard} onClick={() => onClose(id)}>X</button>}
          <button className={style.btnFav} onClick={handleFavorite} >
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


export default Card;