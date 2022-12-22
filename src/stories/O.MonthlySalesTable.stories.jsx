import React from 'react';
import {MonthlySalesTable} from "../component/organisms/Table/MonthlySalesTable";

export default {
    title: 'Organism/Table/MonthlySalesTable',
    component: MonthlySalesTable,
    argTypes:{}
}


const Template = (args) => <MonthlySalesTable {...args} />

export const Default = Template.bind({});
Default.args = {
    labels: ['사업자별', '마켓별']
}