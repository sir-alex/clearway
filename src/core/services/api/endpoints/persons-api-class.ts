import { RequestService } from '@core/services/request-service';
import { RoutesService } from '../../routes-service';
import { CONFIG } from '@root/config';

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
    public async getSingle (personId: string): Promise<ISearchResponsePerson> {
        const apiPathPattern = CONFIG.API.ENDPOINTS.GET_PERSON;
        const apiPath: string = RoutesService.replaceRouteLink(apiPathPattern, {personId});
        return this.get<ISearchResponsePerson>(apiPath);
    }
}
