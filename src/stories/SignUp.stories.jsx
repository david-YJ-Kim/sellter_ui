import React from 'react';
import {MuiSignUp} from "../component/organisms/SignUp/MuiSignUp";


export default {
    title: 'Page/MuiSignUp',
    component: MuiSignUp,
    argTypes:{}
}

const Template = (args) => <MuiSignUp {...args} />
export const Default = Template.bind({});