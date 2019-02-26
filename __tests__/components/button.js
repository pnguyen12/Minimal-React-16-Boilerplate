import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../src/components/atoms/Button';

configure({ adapter: new Adapter() });

const setup = () => {
    const state = {};
    const props = { className: 'button-class', text: 'A sophisticated button' }
    const enzymeWrapper = shallow(<Button {...state} {...props} />);
    return { enzymeWrapper };
}

const { enzymeWrapper } = setup();

it('Should have a root div with className as App', () => {
    expect(enzymeWrapper.find('a').hasClass('button-class')).toBe(true);
    expect(enzymeWrapper.text().includes('A sophisticated button')).toBe(true)
})






