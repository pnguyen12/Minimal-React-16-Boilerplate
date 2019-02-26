import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../src/components/Home';

configure({ adapter: new Adapter() });

const setup = () => {
    const state = {};
    const props = { title: 'React Boilerplate', sub: 'Start building' };
    const enzymeWrapper = shallow(<Home {...state} {...props} />);
    return { enzymeWrapper };
}

const { enzymeWrapper } = setup();

it('Should have a root div with className as App', () => {
    expect(enzymeWrapper.find('div').hasClass('home-wrapper')).toBe(true);
    expect(enzymeWrapper.find('header').hasClass('home-header')).toBe(true);
    expect(enzymeWrapper.find('.home-header-text').text().includes('React Boilerplate')).toBe(true)
    expect(enzymeWrapper.find('.home-header-sub').text().includes('Start building')).toBe(true)
})
