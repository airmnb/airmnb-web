import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Login from './component';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('d', () => {
    beforeEach(() => {
        const wrapper = shallow((<Login />));
    })
    test.only('t', () => {
        expect(true).toBeFalsey();
    })
})