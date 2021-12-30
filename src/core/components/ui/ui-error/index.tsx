import React from 'react';
import styles from './styles.module.scss';

interface Props {
    text?: string;
}

export const UiError: React.FC<Props> = React.memo(({text}) => {
    return (
        <p className={styles.error}>
            {text}
        </p>
    );
});

UiError.defaultProps = {
    text: 'Something goes wrong'
}
