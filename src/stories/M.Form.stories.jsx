import React from 'react';
import {Form} from "../component/molecules/Form";

export default {
    title: 'Molecules/Form',
    component: Form,
    argTypes:{}
}


const Template = (args) => <Form {...args} />

export const Default = Template.bind({});
export const SignUp = Template.bind({});
SignUp.args={
    type:"SignUp"
};

export const SignIn = Template.bind({});
SignIn.args={
    type:"SignIn"
};
