import React from 'react';
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import { ISearchResponseArtist } from '@core/services/api/endpoints/artists-api-class';

import styles from '../styles/artist-single.module.scss';
import { UiIcon, UiIconType } from '@core/components/ui/ui-icon';

interface Props {
    filter: string;
    artist: ISearchResponseArtist;
}

export const ArtistSingle: React.FC<Props> = React.memo((
    {
        filter,
        artist
    }) => {
    return (
        <div className={styles.container}>
            <Link to={`/artists/${artist.id}`}>
                <div className={styles.avatar}>
                    <img
                        src={artist.avatar}
                        alt={artist.name}
                    />
                </div>
                <div className={styles.info}>
                    <Highlighter
                        highlightClassName={styles.highlight}
                        searchWords={[filter]}
                        autoEscape={true}
                        textToHighlight={artist.name}
                        className={styles.name}
                    />
                    <div className={styles.followers}>
                        <UiIcon
                            type={UiIconType.followers}
                            className={styles.followersIcon}
                        />
                        {artist.followers}
                    </div>
                </div>
            </Link>
        </div>
    );
});
