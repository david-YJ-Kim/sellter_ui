import React from 'react';
import {ResponsiveGrid} from "../component/atoms/Navigation/Grid";

export default {
    title: 'Atoms/Navigation/Grid',
    component: ResponsiveGrid,
    argTypes:{}
}

const Template = (args) => <ResponsiveGrid {...args} />
export const Default = Template.bind({});
// Default.args={
//     labels:["Item-One", "Item-Two", "Item-Three"]
// };