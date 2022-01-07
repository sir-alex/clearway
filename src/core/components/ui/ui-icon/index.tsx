import React from 'react';
import { GeneralProps } from '@root/types/prop';

export enum UiIconType {
    menu = 'menu',
    backRow = 'backRow',
    search = 'search',
    personalCabinet = 'personalCabinet',
    wallet = 'wallet',
    relations = 'relations',
    followers = 'followers',
    addIcon = 'addIcon'
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
    const personalCabinetIcon = () => {
        return (
            <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0568 0.645584C9.74152 0.645584 6.56227 1.96259 4.21803 4.30673C1.87389 6.65087 0.556885 9.83051 0.556885 13.1455C0.556885 16.4604 1.87389 19.64 4.21803 21.9842C6.56217 24.3284 9.74182 25.6454 13.0568 25.6454C15.9093 25.6566 18.6778 24.6808 20.8931 22.8837C22.9088 21.2617 24.3715 19.0544 25.0796 16.5662C25.7876 14.078 25.7063 11.4314 24.8464 8.99089C23.9866 6.55087 22.3908 4.43768 20.2792 2.9428C18.1676 1.44791 15.6441 0.645386 13.057 0.645386L13.0568 0.645584ZM13.0566 5.02285C14.1337 5.02285 15.1666 5.45087 15.9284 6.21252C16.6899 6.97403 17.1178 8.00716 17.1178 9.08429C17.1178 10.1614 16.69 11.1943 15.9284 11.956C15.1667 12.7178 14.1337 13.1455 13.0566 13.1455C11.9795 13.1455 10.9463 12.7177 10.1848 11.956C9.42317 11.1944 8.99515 10.1614 8.99515 9.08429C8.99515 8.00716 9.42317 6.97403 10.1846 6.21252C10.9463 5.45087 11.9795 5.02285 13.0565 5.02285H13.0566ZM21.066 20.4394C20.6899 20.8522 20.2824 21.2354 19.8476 21.5855C17.6994 23.3174 14.9709 24.1631 12.2202 23.95C9.46915 23.7371 6.90324 22.4813 5.04759 20.4394C4.86856 20.2434 4.69979 20.0399 4.53663 19.8326C5.20161 17.0785 8.76122 14.9734 13.0569 14.9734C17.3499 14.9734 20.9111 17.0783 21.5772 19.832C21.4143 20.0395 21.2455 20.2432 21.0665 20.4394H21.066Z" fill="black"/>
            </svg>
        )
    }
    const walletIcon = () => {
        return (
            <svg className={className} width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.9241 4.34457L3.20397 4.34172C2.73267 4.34172 2.35045 3.95974 2.35045 3.48796C2.35045 3.01689 2.73244 2.63492 3.20397 2.63492L24.698 2.6316C25.2622 2.6316 25.7197 2.17431 25.7197 1.60987C25.7197 1.04568 25.2624 0.588135 24.698 0.588135H2.5186C1.20448 0.588135 0.134766 1.65785 0.134766 2.97197V24.4696C0.134766 25.15 0.686364 25.7025 1.36764 25.7025L19.1743 25.7027H27.9247C28.6058 25.7027 29.1576 25.1504 29.1576 24.4699L29.1574 5.57747C29.1574 4.89618 28.6058 4.34435 27.9245 4.34435L27.9241 4.34457ZM27.271 12.6748H20.593C19.3307 12.6748 18.3073 11.6517 18.3073 10.3893C18.3073 9.12648 19.3307 8.1031 20.593 8.1031H27.271V12.6748ZM19.839 10.3893C19.839 10.9302 20.2772 11.369 20.8186 11.369C21.36 11.369 21.7983 10.93 21.7983 10.3893C21.7983 9.84795 21.36 9.40969 20.8186 9.40969C20.2772 9.40969 19.839 9.84797 19.839 10.3893Z" fill="black"/>
            </svg>
        )
    }
    const relationsIcon = () => {
        return (
            <svg className={className} width="100" height="130" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M77.627 9.09523C76.3147 8.99522 75.0158 9.41302 74.0079 10.2597C73.0001 11.1064 72.3634 12.3142 72.2356 13.6254L71.4545 22.5412V22.5401C67.1089 19.1733 62.0263 16.8855 56.6251 15.8654L63.6787 8.81188V8.81077C64.6398 7.88408 65.1865 6.60848 65.1987 5.27389C65.2099 3.9383 64.6854 2.65494 63.7409 1.71056C62.7965 0.766088 61.5131 0.241615 60.1776 0.252737C58.8431 0.264959 57.5675 0.811629 56.6407 1.77279L50.2038 8.20853L43.767 1.77279C42.5025 0.551639 40.6881 0.0871857 38.9924 0.551639C37.298 1.0172 35.9735 2.3417 35.5079 4.03618C35.0434 5.73177 35.5079 7.54632 36.729 8.81071L43.7826 15.8654C38.3814 16.8854 33.2991 19.1733 28.9533 22.5401L28.1721 13.6242V13.6253C28.0855 12.2875 27.4643 11.0419 26.4487 10.1698C25.4332 9.29645 24.1076 8.86977 22.7731 8.98531C21.4385 9.10086 20.2074 9.74978 19.3573 10.7854C18.5073 11.8198 18.1095 13.1543 18.2551 14.4866L19.0462 23.557L9.98157 24.3537L9.98268 24.3526C8.20374 24.4292 6.60139 25.4482 5.77819 27.0271C4.95484 28.6049 5.03705 30.5028 5.99264 32.005C6.94823 33.5061 8.63159 34.3851 10.4105 34.3084C10.556 34.3162 10.7027 34.3162 10.8483 34.3084L19.5696 33.5473V33.5462C17.1306 38.0561 15.7261 43.052 15.4584 48.1721L8.92167 41.5964C7.6572 40.3753 5.84276 39.9108 4.14714 40.3753C2.45266 40.8408 1.12825 42.1653 0.6626 43.8598C0.198146 45.5554 0.6626 47.37 1.88375 48.6344L8.31949 55.0712L1.88375 61.5081C0.922618 62.4348 0.37593 63.7104 0.363698 65.045C0.352587 66.3806 0.87705 67.6639 1.82152 68.6083C2.76598 69.5528 4.04935 70.0773 5.38485 70.0661C6.71933 70.0539 7.99493 69.5072 8.92173 68.5461L15.3586 62.1103V89.9167H10.3807C8.85952 89.8945 7.40503 90.5389 6.39835 91.679C5.47056 92.7412 5.16275 94.2112 5.58721 95.5569L13.4819 120.118C14.573 123.021 16.5443 125.509 19.1209 127.235C21.6965 128.96 24.7488 129.837 27.8479 129.74H72.561C75.6589 129.836 78.71 128.959 81.2857 127.234C83.8602 125.508 85.8312 123.02 86.9212 120.118L94.8159 95.5569H94.817C95.2404 94.2113 94.9337 92.7413 94.0059 91.679C93.0014 90.5378 91.5481 89.8945 90.0281 89.9167H85.0502V62.1104L91.4871 68.5472V68.5461C92.7515 69.7673 94.566 70.2317 96.2616 69.7673C97.9561 69.3017 99.2805 67.9772 99.7461 66.2827C100.211 64.5872 99.7461 62.7726 98.525 61.5082L92.0893 55.0713L98.5261 48.6345H98.525C99.7462 47.37 100.211 45.5556 99.7462 43.8599C99.2806 42.1655 97.9561 40.841 96.2616 40.3754C94.566 39.9109 92.7515 40.3754 91.4871 41.5965L84.9504 48.1324C84.6826 43.0123 83.2781 38.0167 80.8392 33.5076L89.5605 34.2687C89.7061 34.2765 89.8527 34.2765 89.9983 34.2687C91.7772 34.3454 93.4607 33.4676 94.4161 31.9653C95.3716 30.463 95.4539 28.5652 94.6306 26.9874C93.8072 25.4084 92.205 24.3895 90.4261 24.3129L81.3615 23.5162L82.1526 14.4459L82.1537 14.447C82.257 13.138 81.8392 11.8425 80.9925 10.8401C80.1447 9.83787 78.9358 9.21116 77.628 9.09562L77.627 9.09523ZM25.3134 50.0933C25.3211 44.3576 27.3045 38.7997 30.9324 34.3574C34.5592 29.914 39.6071 26.8573 45.225 25.7016V89.9167H25.3134V50.0933ZM55.1808 89.9167V25.7016C60.7988 26.8571 65.8467 29.914 69.4734 34.3574C73.1013 38.7997 75.0848 44.3576 75.0925 50.0933V89.9167H55.1808Z" fill="black"/>
            </svg>
        )
    }
    const followersIcon = () => {
        return (
            <svg className={className} version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 19" width="25" height="19">
                <defs>
                    <image width="200" height="200" id="img1" href="data:image/png;base64,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"/>
                </defs>
                <use id="256612-200" href="#img1" transform="matrix(.133,0,0,.135,-0.781,-3.958)"/>
            </svg>
        )
    }
    const addIcon = () => {
        return (
            <svg className={className}  version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" width="75" height="75">
                <defs>
                    <image  width="40" height="41" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAMAAABwfJv6AAAAAXNSR0IB2cksfwAAAIpQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9jdojQAAAC50Uk5TAAMmT1I+DWvs7r8hdv/MIs0jFjhEm9pdNFjbo1zdDx8kJYvXRhpnsR0CID0uCu8xOV4AAACBSURBVHicY2BAB4xMzCysbBjCWAA7BycXNzEKeXh5+fiJVCggOGAKB9CNRFs9FNw4yIJHSFgEDYjy8oqJowtKMEhK8RIDpBlkZKmtUE5eQVFRAYZBlBIvr7KKIkIUTKnSKxwHWRRSZvVQCJ6h4EbirFaTlVXXIEKdppa2to4uhjAA4msZRwGkNVQAAAAASUVORK5CYII="/>
                    <image  width="75" height="75" id="img2" href="data:image/png;base64,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"/>
                </defs>
                <use id="Layer 2" href="#img1" x="17" y="17" />
                <use id="kisspng-state-bank-of-india-sbi-po-exam-2018-state-bank-checkmark-icon-5b49e8255cbf47.1911147415315702133799" href="#img2" x="0" y="0" />
            </svg>
        )
    }
    switch (type) {
        case UiIconType.menu:
            return menuIcon();
        case UiIconType.backRow:
            return backRowIcon();
        case UiIconType.personalCabinet:
            return personalCabinetIcon();
        case UiIconType.wallet:
            return walletIcon();
        case UiIconType.relations:
            return relationsIcon();
        case UiIconType.followers:
            return followersIcon();
        case UiIconType.addIcon:
            return addIcon();
        case UiIconType.search:
        default:
            return searchIcon();
    }
});
