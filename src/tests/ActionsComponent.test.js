import React from 'react'
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Actions } from '../components/Actions';

configure({ adapter: new Adapter() });

function setup() {
    const props = {
        updateToDo: jest.fn(),
        handleAction: jest.fn()
    }

    const enzymeWrapper = mount(<Actions {...props} />)
    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Actions', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup()
            const buttons = enzymeWrapper.find('Button');
            for (let button of buttons) {
                expect(button.props.className === 'button');
                expect(button.props.onClick === button.handleAction);
            }

        });
    })
})