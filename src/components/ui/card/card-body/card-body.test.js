import React from 'react';
import CardBody from './CardBody';

describe('CardBody component', () => {
    it('renders the component with vehicle data', () => {
        const vehicle = {
            id: 1,
            price: 1000,
            description: 'Test description',
        };
        const wrapper = shallow(<CardBody vehicle={vehicle} />);
        expect(wrapper.find('.card__body__title').text()).toEqual('1');
        expect(wrapper.find('.card__body__price').text()).toEqual('From 1000');
        expect(wrapper.find('.card__body__description').text()).toEqual('Test description');
    });
});
