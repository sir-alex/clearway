import React from 'react';
import { InputBlock } from '@modules/persons/search/componets/input-block';
import useDebounce from '@core/hooks/useDebounce';
import { PersonsBlock } from '@modules/persons/search/componets/persons-block';
import { usePersonsData } from '@core/hooks/usePersonsData';
import { UiLoading } from '@core/components/ui/ui-loading';
import { UiError } from '@core/components/ui/ui-error';

import styles from './styles/index.module.scss';

export const PersonSearch: React.FC = React.memo(() => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const debouncedSearch = useDebounce(searchQuery, 1000);
    const { isLoading, data, error } = usePersonsData(debouncedSearch);
    const searchQueryHandler = React.useCallback((event) => {
        setSearchQuery(event.target.value);
    }, [setSearchQuery]);

    return (
        <div className="content">
            <InputBlock
                value={searchQuery}
                onChange={searchQueryHandler}
            />
            {isLoading &&
                <div className={styles.blockContainer}>
                    <UiLoading/>
                </div>
            }
            {!isLoading && error &&
                <div className={styles.blockContainer}>
                    <UiError/>
                </div>
            }
            {!isLoading && !error && data && data.persons.length > 0 &&
                <PersonsBlock
                    persons={data.persons}
                />
            }
        </div>
    )
})
