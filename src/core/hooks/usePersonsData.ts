import { useQuery } from 'react-query';
import { Api } from '@core/services/api/api';
import { ISearchResponse } from '@core/services/api/endpoints/persons-api-class';
import { CONFIG } from '@root/config';

export interface IUseChartsData {
    isLoading: boolean;
    data: ISearchResponse | undefined;
    error: any;
}

export function usePersonsData (
    searchQuery: string
): IUseChartsData {

    const fetchPersons = () => {
        return Api.persons.search({query: encodeURIComponent(searchQuery)});
    };

    const { isLoading, data, error } = useQuery<ISearchResponse, any>(
        ['persons', searchQuery],
        fetchPersons,
        {
            ...CONFIG.API.FETCH_OPTIONS,
            enabled: Boolean(searchQuery),
        }
    );

    return {isLoading, data, error}

}

