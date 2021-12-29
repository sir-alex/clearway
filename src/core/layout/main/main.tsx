import React from 'react';
import { TopBar } from './partials/top-bar';

import styles from './styles.module.scss';

export const MainLayout: React.FC = ({children}) => {
    return (
        <main className={styles.container}>
            <TopBar/>
            {children}
        </main>
    )
}
