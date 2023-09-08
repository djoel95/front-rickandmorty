import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
 
  return (
    <div className={style.cardsContainer}>
      {characters.map((character) => (
        <Card
          onClose={onClose}
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          image={character.image}
        />
      ))}
    </div>
  );
};
export default Cards;
