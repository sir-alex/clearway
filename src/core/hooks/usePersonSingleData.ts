import { useQuery } from 'react-query';
import { Api } from '@core/services/api/api';
import { ISearchResponsePerson } from '@core/services/api/endpoints/persons-api-class';
import { CONFIG } from '@root/config';

export interface IUsePersonSingleData {
    isLoading: boolean;
    data: ISearchResponsePerson | undefined;
    error: any;
}

export function usePersonSingleData (
    personId: string | undefined
): IUsePersonSingleData {

    const fetchPersons = () => {
        return Api.persons.getSingle(personId!);
    };

    const { isLoading, data, error } = useQuery<ISearchResponsePerson, any>(
        ['persons', personId],
        fetchPersons,
        {
            ...CONFIG.API.FETCH_OPTIONS,
            enabled: Boolean(personId),
        }
    );

    return {isLoading, data, error}

}

