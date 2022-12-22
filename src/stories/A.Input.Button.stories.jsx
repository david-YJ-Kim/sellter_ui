import React from 'react';
import {MuiButton} from "../component/atoms/Input/MuiButton";

export default {
    title: 'Atoms/Input/Button',
    component: MuiButton,
    argTypes:{}
}

const Template = (args) => <MuiButton {...args} />
export const Default = Template.bind({});
Default.args={
    type:'Basic'
}

export const Color = Template.bind({});
Color.args={
    type:'Color'
}

export const Upload = Template.bind({});
Upload.args={
    type:'Upload'
}

export const IconLabel = Template.bind({});
IconLabel.args={
    type:'IconLabel'
}

export const Icon = Template.bind({});
Icon.args={
    type:'Icon'
}

export const IconSize = Template.bind({});
IconSize.args={
    type:'IconSize'
}

export const IconColor = Template.bind({});
IconColor.args={
    type:'IconColor'
}

export const Loading = Template.bind({});
Loading.args={
    type:'Loading'
}

export const Customize = Template.bind({});
Customize.args={
    type:'Customize'
}