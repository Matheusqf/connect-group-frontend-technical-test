import React from 'react';
import styles from './style.module.scss';

const CardImage = ({ name, media }) => {
    const mobileImage = media.find((m) => m.url.includes('1x1')).url;
    const tabletAndWebImage = media.find((m) => m.url.includes('16x9')).url;

    return (
        <picture className={styles['card__image']}>
            <source media="(min-width: 768px)" srcSet={tabletAndWebImage} alt={name} />
            <source media="(max-width: 767px)" srcSet={mobileImage} alt={name} />
            <img
                className={styles['card__image__img']}
                src={mobileImage}
                alt={name}
            />
        </picture>
    );
};

export default CardImage;