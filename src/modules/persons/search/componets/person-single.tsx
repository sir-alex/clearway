import React from 'react';
import { Link } from 'react-router-dom';
import { PersonSingleRating } from '@modules/persons/search/componets/person-single-rating';
import { UiButton, UiButtonSize } from '@core/components/ui/ui-button';
import { UiGlobalColorScheme } from '@core/constants/ui-constants';
import { ISearchResponsePerson } from '@core/services/api/endpoints/persons-api-class';
import { StringService, WrapTag } from '@root/core/services/string-service';

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
    const wrappedSearch = React.useMemo(() => {
        return StringService.wrapSubstring(person.name, search, WrapTag.span);
    }, [search]);
    return (
        <div className={styles.container}>
            <div
                className={styles.name}
                dangerouslySetInnerHTML={{__html: wrappedSearch}}
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
    )
})
