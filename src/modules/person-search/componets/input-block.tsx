import React from 'react';
import { UiInput } from '@core/components/ui/ui-input';
import { UiIcon, UiIconType } from '@core/components/ui/ui-icon';

import styles from '../styles/input-block.module.scss';

interface Props {
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBlock: React.FC<Props> = React.memo((
    {
        value,
        onChange
    }) => {
    return (
        <UiInput
            value={value}
            onChange={onChange}
            icon={<UiIcon type={UiIconType.search} className={styles.searchIcon} />}
        />
    )
})
