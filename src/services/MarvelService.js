class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apikey = 'apikey=aefde2755ed6660a8cc238637d7d41b1';
    _baseOffset = 210;

    getResource = async (url) => {
        const res = await fetch (url);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apikey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apikey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
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
}

export default MarvelService;