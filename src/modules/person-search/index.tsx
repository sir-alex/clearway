import React from 'react';
import { InputBlock } from '@modules/person-search/componets/input-block';
import useDebounce from '@core/hooks/useDebounce';
import { ISearchResponsePerson } from '@core/services/api/endpoints/persons-api-class';
import { Api } from '@core/services/api/api';
import { PersonsBlock } from '@modules/person-search/componets/persons-block';

export const PersonSearch: React.FC = React.memo(() => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [persons, setPersons] = React.useState<ISearchResponsePerson[]>([]);
    const debouncedSearch = useDebounce(fetchData, 1000);
    const searchQueryHandler = React.useCallback((event) => {
        setSearchQuery(event.target.value);
        debouncedSearch()
    }, [setSearchQuery]);

    async function fetchData() {
        const personsFetched = await Api.persons.search({query: encodeURIComponent(searchQuery)});
        setPersons(personsFetched.persons);
    }

    return (
        <div className="content">
            <InputBlock
                value={searchQuery}
                onChange={searchQueryHandler}
            />
            <PersonsBlock
                persons={persons}
            />
        </div>
    )
})
