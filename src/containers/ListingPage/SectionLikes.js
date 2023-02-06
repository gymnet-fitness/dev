﻿import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import css from './ListingPage.module.css';

const IconHeart = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 28 "
        >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
        </svg>
    );
};

const currentLikes =
    currentUser?.attributes?.profile?.privateData?.likedListings;
const alreadyLiked = currentLikes?.includes(listingId);

const SectionLikes = props => {
    const {
        publicData,
        onUpdateLikes,
       listingId,
           currentUser,
        updateLikesInProgress,
        likesOffset,
   onAddLike,
           onSubtractLike,
    } = props;

    const likes = publicData?.likes ? publicData.likes : 0;
    const classes = classNames(currentUser ? css.heartIcon : css.heartDisabled, alreadyLiked ? css.iconLiked : null)

    return (
        <span className={classes}
            onClick={() => {
                   if (!updateLikesInProgress && currentUser) {
                       onUpdateLikes(listingId);
                       if (alreadyLiked) {
                                     onSubtractLike();
                                    }
                                else {
                                  onAddLike();
                                }
                        }
                  }}>
        >
            <IconHeart /> {likes + likesOffset}
        </span>
    );
};

export default SectionLikes;