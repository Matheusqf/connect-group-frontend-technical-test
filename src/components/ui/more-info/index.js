import React from 'react';
import styles from './style.module.scss';
const MoreInfo = ({ details, onCard = false }) => {
    const {
        description, meta, modelYear
    } = details;
    return (
        <div className={styles['more-info']}>
            <div className={styles['more-info__content']} data-testid="more-info__content">
                {!onCard && <p className={styles['more-info__description']} data-testid="more-info__description">{description}</p>}

                <div className={styles['more-info__details']}>
                    <p className={styles['more-info__details-title']}>
                        Details:
                    </p>
                    <ul className={styles['more-info__list']}>
                        <li className={styles['more-info__list-item']}>
                            <strong>Model Year:</strong>
                            <span>{modelYear}</span>
                        </li>
                        <li className={styles['more-info__list-item']}>
                            <strong>Body Styles:</strong>
                            <span>{meta.bodystyles.join(', ')}</span>
                        </li>
                        <li className={styles['more-info__list-item']}>
                            <strong>Drive Train:</strong>
                            <span>{meta.drivetrain.join(', ')}</span>
                        </li>
                        <li className={styles['more-info__list-item']}>
                            <strong>Seats:</strong>
                            <span>
                                {meta.passengers}
                            </span>
                        </li>
                        <li className={styles['more-info__list-item']}>
                            <strong>{meta.emissions.template.split('$value')[0]}</strong>
                            <span>
                                {meta.emissions.value}
                                {meta.emissions.template.split('$value')[1]}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MoreInfo;