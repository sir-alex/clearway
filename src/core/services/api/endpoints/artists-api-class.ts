import { RequestService } from '@core/services/request-service';
import { RoutesService } from '../../routes-service';
import { CONFIG } from '@root/config';

export interface ISearch {
    query: string;
}

export interface ISearchResponseArtist {
    id: number;
    name: string;
    followers: string;
    minted: number;
    avatar: string;
}

export interface ISearchResponse {
    artists: ISearchResponseArtist[];
}

export class ArtistsApiClass extends RequestService {
    public async search (): Promise<ISearchResponse> {
        const apiPath = CONFIG.API.ENDPOINTS.SEARCH_ARTISTS;
        return this.get<ISearchResponse>(apiPath);
    }
    public async getSingle (artistId: string): Promise<ISearchResponseArtist> {
        const apiPathPattern = CONFIG.API.ENDPOINTS.GET_ARTIST;
        const apiPath: string = RoutesService.replaceRouteLink(apiPathPattern, {artistId});
        return this.get<ISearchResponseArtist>(apiPath);
    }
}
