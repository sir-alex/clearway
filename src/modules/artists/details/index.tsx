import React from 'react';
import { useParams } from 'react-router';
import { UiButton, UiButtonSize } from '@core/components/ui/ui-button';
import { UiGlobalColorScheme } from '@core/constants/ui-constants';
import { useArtistSingleData } from '@core/hooks/useArtistSingleData';
import { UiLoading } from '@core/components/ui/ui-loading';
import { UiError } from '@core/components/ui/ui-error';
import { UiIcon, UiIconType } from '@core/components/ui/ui-icon';

import styles from './styles/index.module.scss';

export const ArtistDetails: React.FC = React.memo(() => {
    const { artistId } = useParams();
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
            <div className={styles.avatar}>
                <img
                    src={data?.avatar}
                    alt={data?.name}
                />
            </div>
            <div className={styles.detailsBlock}>
                <h3>{data?.name || 'N/A'}</h3>
                <div className={styles.iconsBlock}>
                    <div className={styles.rankBlock}>
                        # <span>{data?.minted}</span>
                    </div>
                    <div className={styles.followersBlock}>
                        <UiIcon
                            type={UiIconType.followers}
                        />
                        <span>
                            {data?.followers}
                        </span>
                    </div>
                </div>
                <UiButton
                    title={'Mint'}
                    buttonSize={UiButtonSize.large}
                    colorScheme={UiGlobalColorScheme.info}
                />
            </div>
        </div>
    )
})
