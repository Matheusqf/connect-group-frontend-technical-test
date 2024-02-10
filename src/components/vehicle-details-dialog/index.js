import React from 'react';
import Dialog from '../../components/ui/dialog';
import styles from './style.module.scss';
import VehicleCardImage from '../../components/ui/card/card-image';
import MoreInfo from '../../components/ui/more-info';

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
            <MoreInfo details={details}></MoreInfo>
        </Dialog>
    );
};

export default VehicleCardDetailsDialog;