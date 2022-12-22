import React from 'react';
import {BizAccount} from "../component/page/BizAcountPage";

export default {
    title: 'Page/Temporary',
    component: BizAccount,
    argTypes:{}
}

const Template = (args) => <BizAccount {...args} />
export const Default = Template.bind({});
Default.args={
    labels:["출고지", "반품지", "출고일", "택배"]
};