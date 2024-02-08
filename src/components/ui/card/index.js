import React from 'react';
import styles from './style.module.scss';
import CardImage from './card-image';
import CardBody from './card-body';

const VehicleCard = ({ vehicle, onClick }) => {
    const { id, media } = vehicle;

    return (
        <div
            role="button"
            className={styles['vehicle-card']}
            aria-label={`Vehicle ${id}`}
            onClick={onClick}
            tabIndex="0"
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    onClick();
                }
            }}
        >
            <CardImage media={media} name={`Vechicle ${id} card`} />
            <CardBody vehicle={vehicle} />
        </div>
    );
};

export default VehicleCard;
