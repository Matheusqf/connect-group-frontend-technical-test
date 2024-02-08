
import React from 'react';
import { render } from '@testing-library/react';
import CardImage from '.';

test('renders CardImage component', () => {
    const media = [
        { url: 'someurl1x1.jpg' },
        { url: 'someurl16x9.jpg' }
    ];
    const name = 'Test Name';
    const { getByAltText } = render(<CardImage name={name} media={media} />);
    const imageElement = getByAltText(name);
    expect(imageElement).toBeInTheDocument();
});