import React from 'react';
import { ISearchResponseArtist } from '@core/services/api/endpoints/artists-api-class';
import { ArtistSingle } from '@modules/artists/search/componets/artist-single';
import { AddBlock } from '@modules/artists/search/componets/add-block';

import styles from '../styles/artists-block.module.scss';

interface Props {
    filter: string;
    artists: ISearchResponseArtist[];
}

export const ArtistsBlock: React.FC<Props> = React.memo((
    {
        filter,
        artists
    }) => {
    function isNameMatch(name: string): boolean {
        const re = new RegExp(filter, 'gi');
        const found = name.match(re);
        return (found && found.length > 0) ? true : false;
    }
    const filteredData = React.useMemo(() => {
        return artists.filter(artist => isNameMatch(artist.name));
    }, [artists, filter]);
    return (
        <div className={styles.container}>
            {filteredData.length > 0 && filteredData
                .map(artist =>
                    <ArtistSingle
                        filter={filter}
                        key={artist.id}
                        artist={artist}
                    />
                )}
            {filteredData.length === 0 &&
                <AddBlock filter={filter}/>
            }
        </div>
    )
})
