import React from 'react';
import {MuiSelect} from "../component/atoms/Input/Select";

export default {
    title: 'Atoms/Input/MuiSelect',
    component: MuiSelect,
    argTypes:{}
}

const Template = (args) => <MuiSelect {...args} />
export const Basic = Template.bind({});
Basic.args={
    type:'Basic'
}