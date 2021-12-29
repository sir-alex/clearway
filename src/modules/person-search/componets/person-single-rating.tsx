import React from 'react';

import styles from '../styles/person-single-rating.module.scss';

interface Props {
    rating: string;
}

export const PersonSingleRating: React.FC<Props> = React.memo((
    {
        rating,
    }) => {
    return (
        <div className={styles.rating}>
            #{rating}
            <div>
                available
            </div>
        </div>
    )
})
