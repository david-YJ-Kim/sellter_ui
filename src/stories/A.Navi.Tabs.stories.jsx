import React from 'react';
import {MuiTabs} from "../component/atoms/Navigation/MuiTabs";

export default {
    title: 'Atoms/Navigation/MuiTabs',
    component: MuiTabs,
    argTypes:{}
}


const Template = (args) => <MuiTabs {...args} />
export const Default = Template.bind({});
Default.args={
    labels:["Item-One", "Item-Two", "Item-Three"],
    type:'Basic'
};

export const Centered = Template.bind({});
Centered.args={
    type:'Centered'
}

export const Vertical = Template.bind({});
Vertical.args={
    type:'Vertical'
}

