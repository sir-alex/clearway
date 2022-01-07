import React from 'react';
import { UiButton, UiButtonSize } from '@core/components/ui/ui-button';
import { UiGlobalColorScheme } from '@core/constants/ui-constants';

import styles from '../styles/add-block.module.scss';
import { Link } from 'react-router-dom';
import { ARTISTS_ROUTES_CONSTANTS } from '@modules/artists/routes-constants';

interface Props {
    filter: string;
}

export const AddBlock: React.FC<Props> = React.memo((
    {
        filter,
    }) => {
    return (
        <div className={styles.addBlock}>
            <p className={styles.txt}>
                {`sorry, we could not find "${filter || 'N/A'}".`}
                <br/>
                would you like to add it?
            </p>
            <Link to={ARTISTS_ROUTES_CONSTANTS.ADD}>
                <UiButton
                    title={`ADD ${filter || 'N/A'}`}
                    buttonSize={UiButtonSize.large}
                    colorScheme={UiGlobalColorScheme.info}
                />
            </Link>
        </div>
    );
});
