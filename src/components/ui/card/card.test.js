import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import VehicleCard from '.';
import { MOCKED_CAR_1 } from '../../../__mocks__/mockedCar';

test('VehicleCard renders correctly', () => {
    const vehicle = MOCKED_CAR_1;

    const mockOnClick = jest.fn();

    const { getByRole } = render(<VehicleCard vehicle={vehicle} onClick={mockOnClick} />);

    const card = getByRole('button', { name: 'Vehicle Car 1' });

    fireEvent.click(card);
    expect(mockOnClick).toHaveBeenCalled();
});

test('VehicleCard keyboard interaction', () => {
    const vehicle = MOCKED_CAR_1;

    const mockOnClick = jest.fn();

    const { getByRole } = render(<VehicleCard vehicle={vehicle} onClick={mockOnClick} />);

    const card = getByRole('button', { name: 'Vehicle Car 1' });

    fireEvent.keyDown(card, { key: 'Enter', code: 13 });
    expect(mockOnClick).toHaveBeenCalled();
});