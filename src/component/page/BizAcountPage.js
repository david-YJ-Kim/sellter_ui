import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Orders from "./demo_dashboard/Orders";
import Paper from "@mui/material/Paper";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface BizAccountProps {
    labels?: ["Item-One", "Item-Two", "Item-Three"];

}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const BizAccount = (props: BizAccountProps) => {

    const { labels, ...other } = props;
    console.log(props);

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (

        <Box sx={{width:'80%',
            justifyContent:'center',
            display:'flex',
            margin:'auto',
            marginTop:'15%',
            // border:1,
            // borderColor:'divider',
            padding:'8px, 16px',
            height:'500px'
        }} >
            <Box sx={
                {
                    width:'50%',
                    height:'500px',
                    // borderRight: 1
                }
            }>
                <h1> Left Side</h1>
                <Box sx={{
                    // borderBottom: 1,
                    // borderColor: 'divider',
                }}>

                    <Paper sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height:'100%'
                    }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            {labels.map((title, index) =>(
                                    <Tab label={title} {...a11yProps(index)} />
                                )
                            )}
                        </Tabs>
                    </Paper>
                </Box>
            </Box>

            <Box sx={
                {
                    width:'50%',
                    height:'500px'
                }
            }>
                <h1>Right Side</h1>
                <Paper sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height:'100%'
                }}>
                    {labels.map((title, index) => (
                        <TabPanel value={value} index={index}>
                            {title}
                        </TabPanel>)
                    )}
                </Paper>
            </Box>

        </Box>



    );
}
