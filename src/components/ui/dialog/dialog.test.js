import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from '.';

describe('Dialog', () => {
    test('renders with children', () => {
        render(
            <Dialog isOpen={true} onClose={() => { }}>
                <span>child element text</span>
            </Dialog>
        );
        const childElement = screen.getByText(/child element text/i);
        expect(childElement).toBeInTheDocument();
    });

    test('closes when close button is clicked', () => {
        const onCloseMock = jest.fn();
        render(<Dialog isOpen={true} onClose={onCloseMock} />);
        const closeButton = screen.getByRole('button', { name: /close dialog/i });
        fireEvent.click(closeButton);
        expect(onCloseMock).toHaveBeenCalled();
    });

    test('closes when "Escape" key is pressed', () => {
        const onCloseMock = jest.fn();
        render(<Dialog isOpen={true} onClose={onCloseMock} />);
        fireEvent.keyDown(window, { key: 'Escape' });
        expect(onCloseMock).toHaveBeenCalled();
    });

});