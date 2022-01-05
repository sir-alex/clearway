import React from 'react';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import { PersonSingleRating } from '@modules/persons/search/componets/person-single-rating';
import { UiButton, UiButtonSize } from '@core/components/ui/ui-button';
import { UiGlobalColorScheme } from '@core/constants/ui-constants';
import { ISearchResponsePerson } from '@core/services/api/endpoints/persons-api-class';

import styles from '../styles/person-single.module.scss';

interface Props {
    search: string;
    person: ISearchResponsePerson;
}

export const PersonSingle: React.FC<Props> = React.memo((
    {
        search,
        person
    }) => {
    return (
        <div className={styles.container}>
            <Highlighter
                highlightClassName={styles.highlight}
                searchWords={[search]}
                autoEscape={true}
                textToHighlight={person.name}
            />
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
    );
});
