import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import PropTypes from "prop-types";
import Button from "@mui/material/Button";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface BasicTabProps {
    labels?: ["Item-One", "Item-Two", "Item-Three"];

}

function BasicTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function BasicA11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const BasicTabs = (props: BasicTabProps) => {

    const { labels, ...other } = props;

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {labels.map((title, index) =>(
                        <Tab label={title} {...BasicA11yProps(index)} />
                        )
                    )}
                </Tabs>
            </Box>
            {labels.map((title, index) => (
                <BasicTabPanel value={value} index={index}>
                    {title}
                </BasicTabPanel>)
                )}
        </Box>
    );
}


const CenteredTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        console.log(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                'TEXT'
            </Typography>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
        </Box>
    );
}


function VerticalTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function VerticalA11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const VerticalTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Item One" {...VerticalA11yProps(0)} />
                <Tab label="Item Two" {...VerticalA11yProps(1)} />
                <Tab label="Item Three" {...VerticalA11yProps(2)} />
                <Tab label="Item Four" {...VerticalA11yProps(3)} />
                <Tab label="Item Five" {...VerticalA11yProps(4)} />
                <Tab label="Item Six" {...VerticalA11yProps(5)} />
                <Tab label="Item Seven" {...VerticalA11yProps(6)} />
            </Tabs>
            <VerticalTabPanel value={value} index={0}>
                Item One
            </VerticalTabPanel>
            <VerticalTabPanel value={value} index={1}>
                Item Two
            </VerticalTabPanel>
            <VerticalTabPanel value={value} index={2}>
                Item Three
            </VerticalTabPanel>
            <VerticalTabPanel value={value} index={3}>
                Item Four
            </VerticalTabPanel>
            <VerticalTabPanel value={value} index={4}>
                Item Five
            </VerticalTabPanel>
            <VerticalTabPanel value={value} index={5}>
                Item Six
            </VerticalTabPanel>
            <VerticalTabPanel value={value} index={6}>
                Item Seven
            </VerticalTabPanel>
        </Box>
    );
}




export const MuiTabs = ({type, ...args}) => {
    if(type === 'Basic'){
        return <BasicTabs {...args} />
    }

    if(type === 'Centered'){
        return <CenteredTabs {...args} />
    }

    if(type === 'Vertical'){
        return <VerticalTabs {...args} />
    }

}



MuiTabs.propTypes = {
    type : PropTypes.oneOf([
        'Basic'
    ])
}

MuiTabs.defaultProps = {
    type :'Basic'
}