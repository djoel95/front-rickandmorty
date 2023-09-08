import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from "./styles.module.css";
import { FaDownload, FaShare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../store/actions";

const Detail = () => {
  const { id } = useParams();
  const { character } = useSelector((state) => state.character)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCharacter(id));
  }, [id]);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = character?.image;
    link.download = `${character?.name}.jpg`;
    link.click();
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("¡URL copiada al portapapeles!");
  };

  return (
    <div className={styles.detailContainerForm} >
      <div className={styles.container}>
        <div className={styles.detailContainerGroup}>
          <div className={styles.containerImage}>
            <img src={character?.image} alt={character?.name} />
            <div className={styles.buttonsContainer}>
              <button onClick={handleDownload}>
                <FaDownload />
                Descargar
              </button>
              <button onClick={handleShare}>
                <FaShare />
                Compartir
              </button>
            </div>
          </div>
          <div className={styles.containerBaseText}>

            <div className={styles.containerText}>
              <h1>Name: {character?.name}</h1>
              <h1>Status: {character?.status}</h1>
              <h1>Species: {character?.species}</h1>
              <h1>Gender: {character?.gender}</h1>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Detail;
