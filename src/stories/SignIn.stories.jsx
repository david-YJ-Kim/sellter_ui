import React from 'react';
import {MuiSignIn} from "../component/organisms/Login/MuiSignIn";


export default {
    title: 'Page/MuiSignIn',
    component: MuiSignIn,
    argTypes:{}
}

const Template = (args) => <MuiSignIn {...args} />
export const Default = Template.bind({});