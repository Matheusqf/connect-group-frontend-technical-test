import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import VehicleCard from '.';

test('VehicleCard renders correctly', () => {
    const vehicle = {
        id: 1,
        media: 'vehicle.jpg'
    };

    const mockOnClick = jest.fn();

    const { getByRole } = render(<VehicleCard vehicle={vehicle} onClick={mockOnClick} />);

    const card = getByRole('button', { name: 'Vehicle 1' });

    fireEvent.click(card);
    expect(mockOnClick).toHaveBeenCalled();
});

test('VehicleCard keyboard interaction', () => {
    const vehicle = {
        id: 1,
        media: 'vehicle.jpg'
    };

    const mockOnClick = jest.fn();

    const { getByRole } = render(<VehicleCard vehicle={vehicle} onClick={mockOnClick} />);

    const card = getByRole('button', { name: 'Vehicle 1' });

    fireEvent.keyDown(card, { key: 'Enter', code: 13 });
    expect(mockOnClick).toHaveBeenCalled();
});