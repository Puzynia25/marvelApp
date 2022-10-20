import React, { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
    offset: 210,
    newItemLoading: false,
    charListEnded: false,
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }

  onRequest = (offset) => { //запрос на сервер, когда кликаем на кнопку 'load more'
    this.onCharListLoading();
    this.marvelService.getAllCharacters(offset)
        .then(this.onCharListLoaded)
        .catch(this.onError);
  }

  onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true
    }

    this.setState(({charList, offset}) => ({
        charList: [...charList, ...newCharList],
        loading: false,
        newItemLoading: false,
        offset: offset + 9,
        charListEnded: ended
    }))
  }

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true
    })
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    })
  }

  setRef = elem => {
    this.activeChar = elem; //создаем наш реф со ссылкой на elem
  }
  
  setCharSelected = () => {
    if (this.selectedChar) {
      this.selectedChar.focus();
    }
  }



  renderItems(arr) {
    
    const items = arr.map((item, i) => {
      let imgStyle = {'objectFit': 'cover'};
      if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit': 'unset'};
      }

      let classChar = 'char__item';
      if (this.activeChar && item.id === this.props.charId) {
        classChar = 'char__item char__item_selected'
      }
  

      return (
        <li 
          className={classChar}
          key={item.id}
          tabIndex={0}
          ref={this.setRef} //этот метод возьмет элемент, на котором он был вызван и запишет его в elem
          onClick={() => {
            this.props.onCharSelected(item.id); 
            this.setCharSelected()
            }}
          onKeyDown={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              this.props.onCharSelected(item.id); 
              this.setCharSelected()
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

  render () {
    const {charList, loading, error, offset, newItemLoading, charListEnded} = this.state;
    const items = this.renderItems(charList);
    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const content = !(loading || error) ? items : null;

    if (charList.length)

    return (
      <div className="char__list">
        {spinner}
        {errorMessage}
        {content}
          <button 
            className="button button__main button__long"
            disabled={newItemLoading}
            style={{"display" : charListEnded ? "none" : "block"}}
            onClick={() => this.onRequest(offset)}>
            <div className="inner">load more</div>
          </button>
      </div>
    )
  }
}

export default CharList;