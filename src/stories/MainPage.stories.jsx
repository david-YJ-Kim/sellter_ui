import React from 'react';
import Dashboard from "../component/page/demo_dashboard/Dashboard";

export default {
    title: 'Page/MainPage',
    component: Dashboard,
    argTypes:{}
}

const Template = (args) => <Dashboard {...args} />
export const Default = Template.bind({});