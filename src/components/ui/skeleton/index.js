import React from 'react';
import styles from './style.module.scss';

const Skeleton = () => {
    return (
        <div className={styles['skeleton-card']}>
            <div className={styles['skeleton-card__image']}></div>
            <div className={styles['skeleton-card__body']}></div>
        </div>
    );
};

export default Skeleton;