import React from 'react';
import { Link } from 'react-router-dom';
import { PersonSingleRating } from '@modules/persons/search/componets/person-single-rating';
import { UiButton, UiButtonSize } from '@core/components/ui/ui-button';
import { UiGlobalColorScheme } from '@core/constants/ui-constants';
import { ISearchResponsePerson } from '@core/services/api/endpoints/persons-api-class';

import styles from '../styles/person-single.module.scss';

interface Props {
    person: ISearchResponsePerson;
}

export const PersonSingle: React.FC<Props> = React.memo((
    {
        person
    }) => {
    return (
        <div className={styles.container}>
            <div>{person.name}</div>
            <div className={styles.info}>
                <PersonSingleRating rating={person.followers}/>
                <Link to={`/persons/${person.id}`}>
                    <UiButton
                        title={'Mint'}
                        buttonSize={UiButtonSize.small}
                        colorScheme={UiGlobalColorScheme.info}
                    />
                </Link>
            </div>
        </div>
    )
})
