import React from 'react';
import {BizAccount} from "../component/page/BizAcountPage";
import {ResponsiveGrid} from "../component/atoms/Navigation/Grid";
import {DirectionStack} from "../component/atoms/Navigation/Stack";

export default {
    title: 'Page/Layout',
    component: ResponsiveGrid,DirectionStack,
    argTypes:{}
}

const Template = (args) => <ResponsiveGrid {...args} />
export const Default = Template.bind({});
// Default.args={
//     labels:["Item-One", "Item-Two", "Item-Three"]
// };


const TemplateStack = (args) => <DirectionStack {...args} />
export const DefaultStack = TemplateStack.bind({});