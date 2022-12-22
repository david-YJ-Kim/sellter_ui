import React from 'react';
import {Chart} from "../component/atoms/DataVisual/Chart";

export default {
    title: 'Atoms/DataVisual/Chart',
    component: Chart,
    argTypes:{}
}

const Template = (args) => <Chart {...args} />
export const Default = Template.bind({});

export const MultiLine = Template.bind({});
MultiLine.args={
    type:'MultiLine'
}