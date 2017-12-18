import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Input} from '../components/Input';

configure( { adapter: new Adapter() });

function setup () {
    const props = {
        id: 'input-to-do',
        type: 'textbox',
        placeholder: 'Add a to-do',
        onChange: jest.fn(),
    }

    const enzymeWrapper = mount( <Input {...props}/> );
    return {
        props,
        enzymeWrapper
    }
}
describe('Input Component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup()
        const input = enzymeWrapper.find('input');

    });
})