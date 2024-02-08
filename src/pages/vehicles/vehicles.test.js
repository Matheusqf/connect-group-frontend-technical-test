import React from 'react';
import { render, screen } from '@testing-library/react';
import VehiclesPage from './index';

test('renders vehicles page title', () => {
    render(<VehiclesPage />);
    const titleElement = screen.getByText(/Vehicles/i);
    expect(titleElement).toBeInTheDocument();
});
