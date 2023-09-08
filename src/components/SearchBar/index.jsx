import { useState } from 'react';
import style from './styles.module.css';
import { getRandomCharacter, onSearch } from '../../store/actions';
import { useDispatch } from 'react-redux';

export default function SearchBar() {
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setId(event.target.value);
  }

  const handleRandomCard = () => {
    dispatch(getRandomCharacter());
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

      <button className={style.button} onClick={() => dispatch(onSearch(id))}>Add</button>
      <button className={style.button2} onClick={handleRandomCard}>Random</button>
    </div>
  );
}