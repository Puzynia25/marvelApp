import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

const CharList = (props) => {

  const [charlist, setCharlist] = useState([]);
  const [offset, setOffset] = useState(210);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [charListEnded, setCharListEnded] = useState(false);

  const {loading, error, getAllCharacters} = useMarvelService();

  useEffect(() => { //запускается после рендера
    onRequest(offset, true);
  }, []) //[] - функция выполнится только 1 раз

  const onRequest = (offset, initial) => { //запрос на сервер, когда кликаем на кнопку 'load more'
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllCharacters(offset)
        .then(onCharListLoaded)
  }

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true
    }

    setCharlist(charlist => [...charlist, ...newCharList]);
    setNewItemLoading(false);
    setOffset(offset => offset + 9);
    setCharListEnded(ended);
  }

  function renderItems(arr) {
    
    const items = arr.map((item, i) => {
      let imgStyle = {'objectFit': 'cover'};
      if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit': 'unset'};
      }

      let classChar = 'char__item';
      if (item.id === props.charId) {
        classChar = 'char__item char__item_selected'
      }

      return (
        <li 
          className={classChar}
          key={i}
          tabIndex={0}
          onClick={() => {
            props.onCharSelected(item.id); 
            }}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              props.onCharSelected(item.id); 
            }
          }}>
            <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
            <div className="char__name">{item.name}</div>
        </li>
      )
    })

    return (
      <ul className="char__grid">
        {items}
      </ul>
    )
  }

  const items = renderItems(charlist);
  const spinner = loading && !newItemLoading ? <Spinner/> : null;
  const errorMessage = error ? <ErrorMessage/> : null;


  if (loading) {
    import('./someFunc')
      .then(obj => obj.secondLogger())
      .catch()
  }

  return (
    <div className="char__list">
      {spinner}
      {errorMessage}
      {items}
        <button 
          className="button button__main button__long"
          disabled={newItemLoading}
          style={{"display" : charListEnded ? "none" : "block"}}
          onClick={() => onRequest(offset)}>
          <div className="inner">load more</div>
        </button>
    </div>
  )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired,
}

export default CharList;