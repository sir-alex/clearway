import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { UiIcon, UiIconType } from '@core/components/ui/ui-icon';
import { UiButton, UiButtonSize } from '@core/components/ui/ui-button';
import { UiGlobalColorScheme } from '@core/constants/ui-constants';
import { useArtistSingleData } from '@core/hooks/useArtistSingleData';
import { UiLoading } from '@core/components/ui/ui-loading';
import { UiError } from '@core/components/ui/ui-error';

import styles from './styles/index.module.scss';

export const ArtistDetails: React.FC = React.memo(() => {
    const { artistId } = useParams();
    const navigate = useNavigate();
    const { isLoading, data, error } = useArtistSingleData(artistId);
    if (isLoading) {
        return (
            <div className={styles.blockContainer}>
                <UiLoading/>
            </div>
        )
    }
    if (!isLoading && error) {
        return (
            <div className={styles.blockContainer}>
                <UiError/>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <h3>{data?.name || 'N/A'}</h3>
{/*            <div className={styles.topBlock}>
                <p className={styles.txt}>
                    {`sorry, we could not find ${data?.name || 'N/A'}.`}
                    <br/>
                    would you like to add them
                </p>
                <UiButton
                    title={`ADD ${data?.name || 'N/A'}`}
                    buttonSize={UiButtonSize.large}
                    colorScheme={UiGlobalColorScheme.info}
                />
            </div>
            <UiButton
                title={'Back'}
                buttonSize={UiButtonSize.large}
                colorScheme={UiGlobalColorScheme.bordered}
                icon={<UiIcon type={UiIconType.backRow} className={styles.backRowIcon}/>}
                onClick={() => navigate(-1)}
            />*/}
        </div>
    )
})
