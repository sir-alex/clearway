import React from 'react';
import { UiIcon, UiIconType } from '@core/components/ui/ui-icon';

import styles from './styles.module.scss';

export const TopBar: React.FC = React.memo(() => {
    return (
        <section className={styles.topBar}>
            <a
                href="https://www.truefans.com/"
                target="_blank"
                rel="noreferrer"
                className={styles.logo}
            >
                Truefans
            </a>
            <div>
                <UiIcon
                    type={UiIconType.personalCabinet}
                    className={styles.personalCabinet}
                />
                <UiIcon
                    type={UiIconType.wallet}
                />
            </div>
        </section>
    )
})
