import { useState } from 'react';
import style from './styles.module.css';

export default function SearchBar() {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  }

  const handleRandomCard = () => {
    const randomId = Math.floor(Math.random() * 826); // Generar un número aleatorio entre 0 y 99
    onRandomCard(randomId);
  }

  return (
    <div className={style.searchBar}>
      <input
        type="search"
        onChange={handleChange}
        value={id}
        placeholder='Type to Search...'
        className={style.input}
      />

      <button className={style.button} onClick={() => onSearch(id)}>Add</button>
      <button className={style.button2} onClick={handleRandomCard}>Random</button>
    </div>
  );
}