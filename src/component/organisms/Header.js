import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import * as React from "react";
import MuiTitle from "../atoms/Text/Title/MuiTitle";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {Link as RouterLink} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const ToggleButtons = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const [target, setTarget] = React.useState(location.pathname.split("/")[1]);


    const handleTarget = (event) => {
        // console.log(event.target.value);
        // useNavigate(`/${event.target.value}`);
        setTarget(location.pathname.split("/")[1]);
        // navigate(`/${event.target.value}`)
        console.log(location.pathname.split("/")[1]);
    }

    return (
        <ToggleButtonGroup
            value={target}
            exclusive
            onChange={handleTarget}
            aria-label="text alignment"
        >

            <RouterLink to={'/'} onClick={handleTarget} value="">
                <ToggleButton value="" aria-label="left aligned">
                    Home
                </ToggleButton>
            </RouterLink>

            <RouterLink to={'/bizLicense'}>
                <ToggleButton value="bizLicense" aria-label="centered">
                    계정설정
                </ToggleButton>
            </RouterLink>

            <RouterLink to={'/keywordCollection'}>
                <ToggleButton value="keywordCollection" aria-label="keywordCollection">
                    키워드 수집
                </ToggleButton>
            </RouterLink>

            <RouterLink to={'/itemCollection'}>
                <ToggleButton value="itemCollection" aria-label="right aligned">
                    상품 수집
                </ToggleButton>
            </RouterLink>


            <RouterLink to={'/itemDeploy'}>
                <ToggleButton value="itemDeploy" aria-label="right aligned">
                    상품 업로드
                </ToggleButton>
            </RouterLink>

            <RouterLink to={'/itemManagement'}>
                <ToggleButton value="right" aria-label="right aligned">
                    상품 관리
                </ToggleButton>
            </RouterLink>

            <RouterLink to={'/salesManagement'}>
                <ToggleButton value="salesManagement" aria-label="right aligned">
                    판매 관리
                </ToggleButton>
            </RouterLink>

            <RouterLink to={'/salesAnalysis'}>
                <ToggleButton value="right" aria-label="right aligned">
                    판매 분석
                </ToggleButton>
            </RouterLink>

            {/*<ToggleButton value="justify" aria-label="justified" disabled>*/}
            {/*    <FormatAlignJustifyIcon />*/}
            {/*</ToggleButton>*/}
        </ToggleButtonGroup>
    );
}


export const Header = () => {
    return (
        <div>
            <Box>
                <Stack direction="row" spacing={5}>
                    <MuiTitle text={"SELLTER"}/>
                    <ToggleButtons/>


                </Stack>
            </Box>
        </div>
    )
}