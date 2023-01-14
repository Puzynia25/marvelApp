import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
import AppBanner from '../appBanner/AppBanner';

import './singleCharLayout.scss';

const SingleCharLayout = () => {

    const [char, setChar] = useState(null);
    const {charId} = useParams(); 
    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar()
    }, [charId])

    const updateChar = () => {
        clearError();

        getCharacter(charId)
            .then(onCharLoaded)
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const content = !(error || loading || !char) ? <View char={char}/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading ? <Spinner/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({char}) => {
    const {title, description, thumbnail} = char;

    return (
        <>
            <AppBanner/>
            <div className="single-char">
                <img src={thumbnail} alt={title} className="single-char__img" style={{'objectFit': 'cover'}}/>
                <div className="single-char__info">
                    <h2 className="single-char__name">{title}</h2>
                    <p className="single-char__descr">{description}</p>
                </div>
                <Link to="/marvelApp" className="single-char__back">Back to all</Link>
            </div>
        </>
    )
}

export default SingleCharLayout;