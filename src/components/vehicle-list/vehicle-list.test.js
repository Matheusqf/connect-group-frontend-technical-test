import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VehicleList from './index';
import { MOCKED_CARS, MOCKED_CAR_1 } from '../../__mocks__/mockedCar';

test('renders loading state', () => {
    const loading = true;
    render(<VehicleList loading={loading} />);
    const loadingElement = screen.getByTestId('loading');
    expect(loadingElement).toBeInTheDocument();
});

test('renders error state', () => {
    const error = 'Error message';
    render(<VehicleList error={error} />);
    const errorElement = screen.getByTestId('error');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('Error message');
});

test('renders vehicles', () => {
    const vehicles = MOCKED_CARS;
    render(<VehicleList vehicles={vehicles} />);
    const vehicle1Element = screen.getByText('Car 1');
    const vehicle2Element = screen.getByText('Car 2');
    expect(vehicle1Element).toBeInTheDocument();
    expect(vehicle2Element).toBeInTheDocument();
});

