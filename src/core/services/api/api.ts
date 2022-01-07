import { ArtistsApiClass } from '@core/services/api/endpoints/artists-api-class';

class ApiClass {
    public artists: ArtistsApiClass;

    constructor() {
        this.artists = new ArtistsApiClass();
    }
}

export const Api = new ApiClass();
