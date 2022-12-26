import React from 'react';
import {MuiStack} from "../component/atoms/Navigation/Stack";

export default {
    title: 'Atoms/Navigation/Stack',
    component: MuiStack,
    argTypes:{}
}

const Template = (args) => <MuiStack {...args} />
export const Horizontal = Template.bind({});
Horizontal.args = {
    type : 'Horizontal'
}

export const Vertical = Template.bind({});
Vertical.args = {
    type : 'Vertical'
}
