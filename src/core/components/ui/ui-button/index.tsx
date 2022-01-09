import React from 'react';
import { UiGlobalColorScheme } from '@core/constants/ui-constants';
import styles from './styles.module.scss';

export const enum UiButtonSize {
    small = 'small',
    normal = 'normal',
    large = 'large'
}

export const enum UiButtonType {
    button = 'button',
    submit = 'submit',
    reset = 'reset'
}

interface Props {
    buttonSize: UiButtonSize;
    buttonType?: UiButtonType;
    colorScheme: UiGlobalColorScheme;
    onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    title?: string | JSX.Element;
    icon?: JSX.Element;
    className?: string;
}

export const UiButton: React.FC<Props> = React.memo((
    {
        title,
        buttonSize,
        buttonType,
        colorScheme,
        icon,
        className,
        ...props
    }) => {
    return (
        <button
            type={buttonType}
            {...props}
            className={`
                ${styles.btn}  
                ${styles[buttonSize]} 
                ${styles[colorScheme]}
                ${className}
            `}
        >
            {icon}
            {title}
        </button>
    );
});

UiButton.defaultProps = {
    buttonSize: UiButtonSize.normal,
    buttonType: UiButtonType.button,
    colorScheme: UiGlobalColorScheme.info
}
