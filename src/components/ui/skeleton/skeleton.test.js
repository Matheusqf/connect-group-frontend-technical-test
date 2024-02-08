import React from 'react';
import Skeleton from './';
import { render, screen } from '@testing-library/react';


describe('Skeleton Component', () => {
    it('renders the skeleton card', () => {
        render(<Skeleton />);
        expect(screen.getByTestId('skeleton-card')).toBeInTheDocument();
    });

    it('renders the skeleton card image', () => {
        render(<Skeleton />);
        expect(screen.getByTestId('skeleton-card__image')).toBeInTheDocument();
    });

    it('renders the skeleton card body', () => {
        render(<Skeleton />);
        expect(screen.getByTestId('skeleton-card__body')).toBeInTheDocument();
    });
});
