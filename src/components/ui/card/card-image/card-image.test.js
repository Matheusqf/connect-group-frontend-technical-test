
import React from 'react';
import { render } from '@testing-library/react';
import CardImage from '.';

test('renders CardImage component', () => {
    const media = [
        { url: 'public/images/1x1/xe_k17.jpg' },
        { url: 'public/images/16x9/fpace_k17.jpg' }
    ];
    const name = 'Test Name';
    const { getByAltText } = render(<CardImage name={name} media={media} />);
    const imageElement = getByAltText(name);
    expect(imageElement).toBeInTheDocument();
});