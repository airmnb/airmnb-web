import React from 'react';
import { Icon } from './babyIcon.style';

export const BabyIcon = ({avatarImageId, gender}) => {
    let iconUrl;
    if( avatarImageId ) {
        iconUrl = `https://www.airmnb.com/public/images/${avatarImageId}`;
    }
    else if( gender === '1') {
        iconUrl = '/assets/male.png'
    } else if ( gender === '2') {
        iconUrl = '/assets/female.png'
    }

    return <Icon iconUrl={iconUrl} />;
}