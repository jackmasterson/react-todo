import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Actions} from '../components/Actions';

configure({ adapter: new Adapter() });

describe("Actions", () => {
    let props;
    let mountedActions;
    const actionsComponent = () => {
        if (!mountedActions) {
            mountedActions = mount(
                <Actions {...props} />
            );
        }
        return mountedActions;
    }

    beforeEach(() => {
        props = {
            handleAction: undefined,
            updateTodo: undefined,
        };
        mountedActions = undefined;
    });
    
    // All tests will go here
    it("always renders a Button", () => {
        const Button = actionsComponent().find("Button");
        expect(Button.length).toBeGreaterThan(0);
    });
    describe("the rendered Button", () => {
        it("contains everything else that gets rendered", () => {
            const divs = actionsComponent().find("div");
            expect(divs).toEqual(actionsComponent().children());
        });
    });

});
