import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const HorizontalStack = () => {
    return (
        <div>
            <Box>
                <Stack direction="row" spacing={1}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </Stack>
            </Box>
            <Box sx={{ marginTop:'3px' }}>
                <Stack direction="row" spacing={1}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </Stack>
            </Box>
        </div>
    );
}



const VerticalStack = () =>{
    return (
        <div>
            <Stack spacing={1}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
        </div>
    )
}


export const MuiStack = ({type}) => {
    if(type === 'Vertical'){
        return <VerticalStack />
    }

    if(type === 'Horizontal'){
        return <HorizontalStack />
    }
}


MuiStack.propTypes = {
    type : PropTypes.oneOf([
        "Vertical",
        "Horizontal"
    ])
}

MuiStack.defaultProps = {
    type : "Horizontal"
}