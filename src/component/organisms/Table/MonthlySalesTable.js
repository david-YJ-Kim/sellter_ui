import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MuiTitle from "../../atoms/Text/Title/MuiTitle";
import {MuiTable} from "../../atoms/DataVisual/Table";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Chart} from "../../atoms/DataVisual/Chart";

interface BasicTabProps {
    labels?: ["Item-One", "Item-Two", "Item-Three"];

}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function BasicTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    // console.log(children, value, index, other)

    let tableFlag = true;
    if(other.viewMode === 'graph'){tableFlag = false}

    const tableMode = value === 0 ? 'Spanning' : 'Dense';
    const graphMode = value === 0 ? 'MultiLine' : 'MultiLine';

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
                    {
                        tableFlag
                        ? <MuiTable type={tableMode} />
                        : <Chart type={graphMode} />
                    }

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

export const MonthlySalesTable = (props: BasicTabProps) => {

    const { labels, ...other } = props;

    const [value, setValue] = React.useState(0);
    const [viewMode, setViewMode] = React.useState('');

    const handleViewMode = (event: SelectChangeEvent) => {
        setViewMode(event.target.value);
    };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>

            <Box sx={{  }}>
                <Stack direction="row" spacing={5}>

                    <MuiTitle text="월별 매출 현황" />

                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        {labels.map((title, index) =>(
                                <Tab label={title} {...BasicA11yProps(index)} />
                            )
                        )}
                    </Tabs>

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">View Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={viewMode}
                                label="View Type"
                                onChange={handleViewMode}
                            >
                                <MenuItem value={"table"}>일별</MenuItem>
                                <MenuItem value={"graph"}>월별</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">View Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={viewMode}
                                label="View Type"
                                onChange={handleViewMode}
                            >
                                <MenuItem value={"table"}>테이블로 보기</MenuItem>
                                <MenuItem value={"graph"}>그래프로 보기</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                </Stack>
            </Box>
            {labels.map((title, index) => (

                <BasicTabPanel value={value} index={index} title={title} viewMode = {viewMode}>
                    {title}

                </BasicTabPanel>)
            )}


        </Box>
    );
}

