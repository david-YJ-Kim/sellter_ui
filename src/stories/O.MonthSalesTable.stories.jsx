import React from 'react';
import {MonthSalesTable} from "../component/organisms/Table/MonthSalesTable";

export default {
    title: 'Organism/Table/MonthSalesTable',
    component: MonthSalesTable,
    argTypes:{}
}


const Template = (args) => <MonthSalesTable {...args} />

export const Default = Template.bind({});
Default.args = {
    labels: ['사업자별', '마켓별']
}