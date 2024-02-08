import React from 'react';
import styles from './style.module.scss';

const Skeleton = () => {
    return (
        <div data-testid="skeleton-card" className={styles['skeleton-card']}>
            <div data-testid="skeleton-card__image" className={styles['skeleton-card__image']}></div>
            <div data-testid="skeleton-card__body" className={styles['skeleton-card__body']}></div>
        </div>
    );
};

export default Skeleton;