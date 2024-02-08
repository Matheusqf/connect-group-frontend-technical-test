import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VehicleCardDetailsDialog from './index';

test('renders vehicle details dialog', () => {
    const details = {
        id: 1,
        media: 'image.jpg',
        price: '$10,000',
        description: 'Vehicle description',
        meta: {
            modelYear: 2022,
            bodystyles: ['SUV'],
            drivetrain: ['AWD'],
            passengers: 5,
            emissions: {
                template: 'CO2 Emissions: $value g/km',
                value: 120
            }
        }
    };
    render(<VehicleCardDetailsDialog isOpen={true} onClose={() => { }} details={details} />);
    const titleElement = screen.getByText('1');
    const descriptionElement = screen.getByText('Vehicle description');
    const modelYearElement = screen.getByText('Model Year: 2022');
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(modelYearElement).toBeInTheDocument();
});

test('calls onClose when dialog is closed', () => {
    const onCloseMock = jest.fn();
    const { rerender } = render(<VehicleCardDetailsDialog isOpen={true} onClose={onCloseMock} details={{}} />);
    const dialogElement = screen.getByTestId('vehicle-details-dialog');
    fireEvent.click(dialogElement);
    expect(onCloseMock).toHaveBeenCalled();
});