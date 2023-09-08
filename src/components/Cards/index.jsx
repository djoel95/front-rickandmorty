import { useSelector } from "react-redux";
import Card from "../Card";
import style from "./styles.module.css";

const Cards = () => {
  const { characters } = useSelector((store) => store.character);

  return (
    <div className={style.cardsContainer}>
      {characters.map((character) => (
        <Card
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
