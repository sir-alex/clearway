import React from 'react';
import { InputBlock } from '@modules/artists/search/componets/input-block';
import useDebounce from '@core/hooks/useDebounce';
import { ArtistsBlock } from '@modules/artists/search/componets/artists-block';
import { useArtistsSearchData } from '@core/hooks/useArtistsSearchData';
import { UiLoading } from '@core/components/ui/ui-loading';
import { UiError } from '@core/components/ui/ui-error';

import styles from './styles/index.module.scss';
import { UiIcon, UiIconType } from '@core/components/ui/ui-icon';
import { Link } from 'react-router-dom';
import { ARTISTS_ROUTES_CONSTANTS } from '@modules/artists/routes-constants';

export const ArtistSearch: React.FC = React.memo(() => {
    const [filterQuery, setFilterQuery] = React.useState('');
    const debouncedSearch = useDebounce(filterQuery, 1000);
    const { isLoading, data, error } = useArtistsSearchData();
    const filterQueryHandler = React.useCallback((event) => {
        setFilterQuery(event.target.value);
    }, [setFilterQuery]);

    return (
        <div className="content">
            {/*<h3 className={styles.title}>Search result</h3>*/}
            <InputBlock
                value={filterQuery}
                onChange={filterQueryHandler}
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
            {!isLoading && !error && data && data.artists.length > 0 &&
                <ArtistsBlock
                    filter={filterQuery}
                    artists={data.artists}
                />
            }
            <Link
                to={ARTISTS_ROUTES_CONSTANTS.ADD}
                className={styles.addButton}
            >
                <UiIcon
                    type={UiIconType.addIcon}
                />
            </Link>
        </div>
    )
})
