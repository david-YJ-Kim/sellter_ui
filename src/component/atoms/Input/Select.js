import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import PropTypes from "prop-types";

const BasicSelect = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">View Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="View Type"
                    onChange={handleChange}
                >
                    <MenuItem value={"ViewTable"}>테이블로 보기</MenuItem>
                    <MenuItem value={"ViewGraph"}>그래프로 보기</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export const MuiSelect = ({type, ...args}) => {
    if(type === "Basic"){
        return <BasicSelect {...args} />
    }
}


MuiSelect.propTypes = {
    type : PropTypes.oneOf([
        "Basic",
    ])
}


MuiSelect.default = {
    type : "Basic"
}