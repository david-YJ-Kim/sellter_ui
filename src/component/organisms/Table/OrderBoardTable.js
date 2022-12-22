import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as React from "react";
import MuiTitle from "../../atoms/Text/Title/MuiTitle";
import CachedIcon from '@mui/icons-material/Cached';
import {MuiTable} from "../../atoms/DataVisual/Table";
import Button from "@mui/material/Button";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export const OrderBoardTable = () => {


    const onClicked = () => {
        alert("Clicked Refresh Btn");
    }

    return (
        <Box sx={{width: '100%'}}>

            <Box sx={{}}>
                <Stack direction="row" spacing={5}>

                    <MuiTitle text="사업자별 주문/배송 현황"/>
                    <CachedIcon onClick={onClicked}/>

                </Stack>
            </Box>

            <MuiTable type='OrderBoard'/>

        </Box>
    );
}

