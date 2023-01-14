import { useHttp } from "../hooks/http.hook";

const  useMarvelService = () => {
    const {loading, error, request, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apikey = 'apikey=aefde2755ed6660a8cc238637d7d41b1';
    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apikey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apikey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset = 0) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apikey}`);
        return res.data.results.map(_transformComics);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apikey}`);
        return _transformComics(res.data.results[0]);
    }

    //поиск персонажа по имени
    const getCharacterByName = async (name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apikey}`);
        return res.data.results.map(_transformCharacter);
  
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0,210)}...` : 'There is no description about this character...',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            comics: char.comics.items,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'There is no description',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available',
            pageCount: comics.pageCount || 'not available',
            language: comics.textObjects.language || 'en-us',
        }
    }

    return {loading, error, clearError, getAllCharacters, getCharacterByName, getCharacter, getAllComics, getComic}
}

export default useMarvelService;