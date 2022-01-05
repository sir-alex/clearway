import React from 'react';
import { ISearchResponsePerson } from '@core/services/api/endpoints/persons-api-class';
import { PersonSingle } from '@modules/persons/search/componets/person-single';

import styles from '../styles/persons-block.module.scss';

interface Props {
    search: string;
    persons: ISearchResponsePerson[];
}

export const PersonsBlock: React.FC<Props> = React.memo((
    {
        search,
        persons
    }) => {
    return (
        <div className={styles.container}>
            {persons.map(person =>
                <PersonSingle
                    search={search}
                    key={person.id}
                    person={person}
                />
            )}
        </div>
    )
})
