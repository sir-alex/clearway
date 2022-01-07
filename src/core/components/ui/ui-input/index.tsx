import React from 'react';
import styles from './styles.module.scss';

export enum UiInputType {
    email = 'email',
    number = 'number',
    password = 'password',
    tel = 'tel',
    text = 'text',
    url = 'url'
}

interface Props {
    type?: UiInputType;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    icon?: JSX.Element;
}

export const UiInput: React.FC<Props> = React.memo(({icon, ...props}) => {
    return (
        <div className={styles.container}>
            <input
                {...props}
            />
            {icon}
        </div>
    );
});

UiInput.defaultProps = {
    type: UiInputType.text
}
