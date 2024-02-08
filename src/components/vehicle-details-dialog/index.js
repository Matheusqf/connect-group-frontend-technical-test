import React from 'react';
import Dialog from '../../components/ui/dialog';
import styles from './style.module.scss';
import VehicleCardImage from '../../components/ui/card/card-image';

const VehicleCardDetailsDialog = ({ onClose, isOpen, details }) => {
    const {
        id, media, price, description, meta, modelYear
    } = details;

    return (
        <Dialog
            className={styles['vehicle-details-dialog']}
            isOpen={isOpen}
            onClose={onClose}
            id="vehicle-details-dialog"
        >
            <div className={styles['vehicle-details-dialog__header']}>
                <VehicleCardImage name={`Details of vehicle ${id}`} media={media} />
                <div className={styles['vehicle-details-dialog__header-info']}>
                    <h1 className={styles['vehicle-details-dialog__title']} data-testid="vehicle-details-dialog__title">{id}</h1>
                    <p className={styles['vehicle-details-dialog__subtitle']}>
                        From:
                        {price}
                    </p>
                </div>
            </div>
            <div className={styles['vehicle-details-dialog__content']} data-testid="vehicle-details-dialog__content">
                <p className={styles['vehicle-details-dialog__description']} data-testid="vehicle-details-dialog__description">{description}</p>

                <div className={styles['vehicle-details-dialog__details']}>
                    <p className={styles['vehicle-details-dialog__details-title']}>
                        Details:
                    </p>
                    <ul className={styles['vehicle-details-dialog__list']}>
                        <li className={styles['vehicle-details-dialog__list-item']}>
                            <strong>Model Year:</strong>
                            <span>{modelYear}</span>
                        </li>
                        <li className={styles['vehicle-details-dialog__list-item']}>
                            <strong>Body Styles:</strong>
                            <span>{meta.bodystyles.join(', ')}</span>
                        </li>
                        <li className={styles['vehicle-details-dialog__list-item']}>
                            <strong>Drive Train:</strong>
                            <span>{meta.drivetrain.join(', ')}</span>
                        </li>
                        <li className={styles['vehicle-details-dialog__list-item']}>
                            <strong>Seats:</strong>
                            <span>
                                {meta.passengers}
                            </span>
                        </li>
                        <li className={styles['vehicle-details-dialog__list-item']}>
                            <strong>{meta.emissions.template.split('$value')[0]}</strong>
                            <span>
                                {meta.emissions.value}
                                {meta.emissions.template.split('$value')[1]}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </Dialog>
    );
};

export default VehicleCardDetailsDialog;