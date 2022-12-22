import React from 'react';
import {LoginPage} from "../component/page/LoginPage";

export default {
    title: 'Page/Login',
    component: LoginPage,
    argTypes:{}
}

const Template = (args) => <LoginPage {...args} />
export const Default = Template.bind({});