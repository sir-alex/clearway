import { CONFIG } from '@root/config';
import { RequestService } from '@core/services/request-service';

export interface ISearch {
    query: string;
}

export interface ISearchResponsePerson {
    id: number;
    name: string;
    followers: string;
    minted: number;
}

export interface ISearchResponse {
    persons: ISearchResponsePerson[];
}

export class PersonsApiClass extends RequestService {
    public async search (params: ISearch): Promise<ISearchResponse> {
        const apiPath = CONFIG.API.ENDPOINTS.SEARCH_PERSONS;
        return this.get<ISearchResponse>(apiPath, params);
    }
}
