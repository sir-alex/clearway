import React from 'react';
import { GeneralProps } from '@root/types/prop';

export enum UiIconType {
    menu = 'menu',
    backRow = 'backRow',
    search = 'search'
}

interface Props extends GeneralProps {
    type: UiIconType;
}

export const UiIcon: React.FC<Props> = React.memo(({type, className}) => {
    const searchIcon = () => {
        return (
            <svg className={className} width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5558 20.3482L20.2309 18.0233C19.8915 17.6856 19.8287 17.1589 20.0793 16.7509C21.8811 13.8507 22.1355 10.2481 20.7587 7.12328C19.3822 3.99851 16.552 1.75487 13.1958 1.12746C9.83962 0.499977 6.38983 1.56956 3.97725 3.98593C1.56494 6.402 0.500185 9.85311 1.13276 13.208C1.76502 16.5632 4.01308 19.3902 7.13951 20.7624C10.2659 22.1344 13.8683 21.8747 16.7653 20.0686C17.1713 19.8194 17.695 19.8799 18.0329 20.2154L20.3579 22.5451C20.6501 22.8349 21.0451 22.9974 21.4568 22.9967C21.8685 22.9961 22.2631 22.8322 22.5544 22.541C22.8456 22.2501 23.0095 21.8555 23.0105 21.4437C23.0129 21.032 22.8487 20.6367 22.5554 20.3475L22.5558 20.3482ZM18.4301 12.5173C18.1344 14.2679 17.2038 15.8486 15.8164 16.9564C14.4293 18.0643 12.6821 18.6221 10.9095 18.5231C9.13669 18.4241 7.46253 17.6754 6.20717 16.4202C4.95154 15.1645 4.20282 13.4906 4.10389 11.7178C4.00488 9.94496 4.56272 8.19808 5.6709 6.81067C6.77874 5.42325 8.35904 4.49292 10.1097 4.19734C12.4182 3.79996 14.7762 4.54965 16.4309 6.20746C18.086 7.86528 18.8316 10.2243 18.4301 12.5321V12.5173Z" fill="black"/>
                <path d="M8.72477 10.1607C8.33695 9.31729 9.20767 8.44657 10.0511 8.83439L10.8608 9.2067C11.126 9.32863 11.4312 9.32863 11.6963 9.2067L12.506 8.83439C13.3495 8.44657 14.2202 9.31729 13.8324 10.1607L13.46 10.9704C13.3381 11.2356 13.3381 11.5408 13.46 11.806L13.8324 12.6157C14.2202 13.4591 13.3495 14.3298 12.506 13.942L11.6963 13.5697C11.4312 13.4477 11.126 13.4477 10.8608 13.5697L10.0511 13.942C9.20767 14.3298 8.33695 13.4591 8.72477 12.6157L9.09709 11.806C9.21902 11.5408 9.21902 11.2356 9.09709 10.9704L8.72477 10.1607Z" fill="black"/>
            </svg>
        );
    }
    const backRowIcon = () => {
        return (
            <svg className={className} width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.328142 7.28495C-0.0667666 7.67104 -0.0739161 8.30416 0.312173 8.69907L6.60387 15.1345C6.98996 15.5294 7.62308 15.5365 8.01799 15.1505C8.4129 14.7644 8.42005 14.1312 8.03396 13.7363L2.44134 8.01596L8.16171 2.42335C8.55662 2.03726 8.56377 1.40413 8.17768 1.00922C7.79159 0.614313 7.15847 0.607163 6.76356 0.993253L0.328142 7.28495ZM18.0297 7.19193L1.03851 7.00006L1.01593 8.99993L18.0071 9.1918L18.0297 7.19193Z" fill="black"/>
            </svg>
        )
    }
    const menuIcon = () => {
        return (
            <svg className={className} width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-6.10352e-05" y="0.990662" width="30" height="2" fill="black"/>
                <rect x="-6.10352e-05" y="7.69727" width="30" height="2" fill="black"/>
                <rect x="-6.10352e-05" y="14.4039" width="30" height="2" fill="black"/>
            </svg>
        )
    }
    switch (type) {
        case UiIconType.menu:
            return menuIcon();
        case UiIconType.backRow:
            return backRowIcon();
        case UiIconType.search:
        default:
            return searchIcon();
    }
});
