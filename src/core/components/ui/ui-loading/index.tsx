import React from 'react';
import styles from './styles.module.scss';

export const UiLoading: React.FC = React.memo(() => {
    return (
        <div className={styles.uiLoading}>
            <div/>
            <div/>
            <div/>
        </div>
    );
});
