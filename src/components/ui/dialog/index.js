import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './style.module.scss';

const ANIMATION_DURATION = 300;

const Dialog = ({ isOpen, onClose, children, customClassName = '' }) => {
    const [isRendered, setIsRendered] = useState(isOpen);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
            setTimeout(() => {
                closeButtonRef.current?.focus();
            }, ANIMATION_DURATION);
        } else {
            const overlay = document.querySelector(`.${styles.dialog__overlay}`);
            overlay.classList.add(styles['fade-out-and-slide-down']);
            setTimeout(() => {
                setIsRendered(false);
            }, ANIMATION_DURATION);
        }
    }, [isOpen]);

    const handleClose = () => {
        onClose();
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    const dialogRoot = document.getElementById('dialog-root');
    if (!isRendered || !dialogRoot) return null;
    return ReactDOM.createPortal(
        <div className={styles.dialog}>
            <div className={`${styles.dialog__overlay} ${customClassName}`}>
                <div className={styles.dialog__content}>
                    <button
                        type="button"
                        className={styles.dialog__close}
                        onClick={handleClose}
                        ref={closeButtonRef}
                        aria-label="Close dialog"
                    >
                        ⓧ
                    </button>
                    {children}
                </div>
            </div>
        </div>,
        dialogRoot
    );
};

export default Dialog;