import React from 'react';
import {MuiTable} from "../component/atoms/DataVisual/Table";

export default {
    title: 'Atoms/DataVisual/Table',
    component: MuiTable,
    argTypes:{}
}


const Template = (args) => <MuiTable {...args} />

export const Default = Template.bind({});
export const Basic = Template.bind({});
Basic.args={
    type:"Basic"
};

export const Data = Template.bind({});
Data.args={
    type:"Data"
};


export const Dense = Template.bind({});
Dense.args={
    type:"Dense"
};

export const ColumnGrouping = Template.bind({});
ColumnGrouping.args={
    type:"ColumnGrouping"
};


export const Collapse = Template.bind({});
Collapse.args={
    type:"Collapse"
};

export const Spanning = Template.bind({});
Spanning.args={
    type:"Spanning"
};

export const OrderBoard = Template.bind({});
OrderBoard.args={
    type:"OrderBoard"
};