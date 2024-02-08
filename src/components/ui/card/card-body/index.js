import React from 'react';
import styles from './style.module.scss';

const CardBody = ({ vehicle }) => {
    const { id, price, description } = vehicle;

    return (
        <div className={styles['card__body']}>
            <h1 className={styles['card__body__title']}>{id}</h1>
            <p className={styles['card__body__price']}>
                From
                {" " + price}
            </p>
            <p className={styles['card__body__description']}>{description}</p>
        </div>
    );
};

export default CardBody;