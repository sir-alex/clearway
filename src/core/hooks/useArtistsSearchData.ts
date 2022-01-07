import { useQuery } from 'react-query';
import { Api } from '@core/services/api/api';
import { ISearchResponse } from '@core/services/api/endpoints/artists-api-class';
import { CONFIG } from '@root/config';

export interface IUseChartsData {
    isLoading: boolean;
    data: ISearchResponse | undefined;
    error: any;
}

export function useArtistsSearchData (): IUseChartsData {

    const fetchArtists = () => {
        return Api.artists.search();
    };

    const { isLoading, data, error } = useQuery<ISearchResponse, any>(
        ['artists'],
        fetchArtists,
        {
            ...CONFIG.API.FETCH_OPTIONS
        }
    );

    return {isLoading, data, error}

}

