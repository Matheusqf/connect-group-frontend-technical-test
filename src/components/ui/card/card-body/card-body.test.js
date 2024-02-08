import React from 'react';
import CardBody from '.';
import { MOCKED_CAR_1 } from '../../../../__mocks__/mockedCar';

describe('CardBody component', () => {
    it('renders the component with vehicle data', () => {
        const vehicle = MOCKED_CAR_1;
        const wrapper = shallow(<CardBody vehicle={vehicle} />);
        expect(wrapper.find('[data-testid="card__body__title"]').text()).toEqual('Car 1');
        expect(wrapper.find('[data-testid="card__body__price"]').text()).toEqual('From £32,000');
        expect(wrapper.find('[data-testid="card__body__description"]').text()).toEqual('Premium luxury saloon, spacious and beautiful yet powerfully agile.');
    });
});
