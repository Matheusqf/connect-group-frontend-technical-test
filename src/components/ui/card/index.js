import React from 'react';
import styles from './style.module.scss';
import CardImage from './card-image';
import CardBody from './card-body';
import MoreInfo from '../more-info';
import { useState } from 'react';

const Card = ({ vehicle, onClick }) => {
    const { id, media } = vehicle;
    const [expanded, setExpanded] = useState(false);

    const handleCardClick = () => {
        onClick();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    const toggleExpanded = (e) => {

        e.stopPropagation();
        setExpanded(!expanded);
    };

    return (
        <div
            role="button"
            className={styles['vehicle-card']}
            aria-label={`Vehicle ${id}`}
            onClick={handleCardClick}
            tabIndex="0"
            onKeyDown={handleKeyDown}
        >
            <CardImage media={media} name={`Vehicle ${id} card`} />
            <CardBody vehicle={vehicle} />{expanded ? (
                <button
                    className={styles['vehicle-card__btn']}
                    onClick={toggleExpanded}
                    aria-label="Read less"
                    tabIndex="0"
                >Read less</button>
            ) : (
                <button
                    className={styles['vehicle-card__btn']}
                    onClick={toggleExpanded}
                    aria-label="Read more"
                    tabIndex="0"
                >Read more</button>
            )}

            {expanded && (
                <MoreInfo details={vehicle} onCard={true}></MoreInfo>
            )}
        </div>
    );
};

export default Card;