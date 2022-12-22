import React from 'react';
import {OrderBoardTable} from "../component/organisms/Table/OrderBoardTable";

export default {
    title: 'Organism/Table/OrderBoardTable',
    component: OrderBoardTable,
    argTypes:{}
}


const Template = (args) => <OrderBoardTable {...args} />

export const Default = Template.bind({});