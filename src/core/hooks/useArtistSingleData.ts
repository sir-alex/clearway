import { useQuery } from 'react-query';
import { Api } from '@core/services/api/api';
import { ISearchResponseArtist } from '@core/services/api/endpoints/artists-api-class';
import { CONFIG } from '@root/config';

export interface IUseArtistSingleData {
    isLoading: boolean;
    data: ISearchResponseArtist | undefined;
    error: any;
}

export function useArtistSingleData (
    artistId: string | undefined
): IUseArtistSingleData {

    const fetchPersons = () => {
        return Api.artists.getSingle(artistId!);
    };

    const { isLoading, data, error } = useQuery<ISearchResponseArtist, any>(
        ['artist', artistId],
        fetchPersons,
        {
            ...CONFIG.API.FETCH_OPTIONS,
            enabled: Boolean(artistId),
        }
    );

    return {isLoading, data, error}

}

