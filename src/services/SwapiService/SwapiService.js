class SwapiService {

    _baseApi = 'https://swapi.co/api/';

    async _getResponse(url) {
        const response = await fetch(`${this._baseApi}${url}`);

        if (!response.ok) {
            throw new Error(`Cant fetch ${response.status}`);
        }

        return await response.json();
    }

    async getAllPeople() {
        const res = await this._getResponse('people/');
        return res.results;
    }

    async getPerson(id) {
        const res = await this._getResponse(`people/${id}/`);
        return res;
    }

    async getAllPlanet() {
        const res = await this._getResponse(`planets/`);
        return res.results;
    }

    async getPlanet(id) {
        const res = await this._getResponse(`planets/${id}`);
        return res;
    }

}

export { SwapiService };