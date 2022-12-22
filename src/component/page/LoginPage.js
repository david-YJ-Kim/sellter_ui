import * as React from 'react';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import molecules from "../molecules";
import {MuiSignIn} from "../organisms/Login/MuiSignIn";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Sellter
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const LoginPageContent = () => {
    const serviceName = "SELLTER";
    const introductiobText = `With the power of ${serviceName}, you can now focus only on functionaries for your digital products, while leaving the
        UI design on us!`;


    return (
        <Box sx={{
            width: '70%',
            justifyContent: 'center',
            display: 'flex',
            margin: 'auto',
            marginTop: '15%',
            border: 1,
            borderColor: 'divider',
            padding: '8px, 16px'
        }}>
            <Box sx={
                {}
            }>
                {/*<molecules.introduction*/}
                {/*    servieceNM={serviceName}*/}
                {/*    introductionText={introductiobText}*/}
                {/*/>*/}
            </Box>

            <Box sx={
                {}
            }>
                <MuiSignIn/>
            </Box>

        </Box>
    )

}

