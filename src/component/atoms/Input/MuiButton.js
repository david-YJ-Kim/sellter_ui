import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button, { ButtonProps } from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import PropTypes from "prop-types";

const BasicButtons =() => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
    );
}


const ColorButtons = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="outlined" color="error">
                Error
            </Button>
        </Stack>
    );
}


const UploadButtons = () => {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
            </IconButton>
        </Stack>
    );
}


const IconLabelButtons = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </Stack>
    );
}


const IconButtons = () => {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
        </Stack>
    );
}


const IconButtonSizes = () => {
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </Stack>
    );
}


const IconButtonColors = () => {
    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
            </IconButton>
        </Stack>
    );
}


const LoadingButtons = () => {
    return (
        <Stack direction="row" spacing={2}>
            <LoadingButton loading variant="outlined">
                Submit
            </LoadingButton>
            <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
                Fetch data
            </LoadingButton>
            <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
            >
                Save
            </LoadingButton>
        </Stack>
    );
}


const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

const CustomizedButtons = () => {
    return (
        <Stack spacing={2} direction="row">
            <ColorButton variant="contained">Custom CSS</ColorButton>
            <BootstrapButton variant="contained" disableRipple>
                Bootstrap
            </BootstrapButton>
        </Stack>
    );
}



export const MuiButton = ({type, ...args}) => {

    if(type === 'Basic'){return <BasicButtons {...args} />}
    if(type === 'Customize') {return <CustomizedButtons {...args} />}
    if(type === 'Loading') {return <LoadingButtons {...args} />}
    if(type === 'IconColor') {return <IconButtonColors {...args} />}
    if(type === 'IconSize') {return <IconButtonSizes {...args} />}
    if(type === 'Icon') {return <IconButtons {...args} />}
    if(type === 'IconLabel') {return <IconLabelButtons {...args} />}
    if(type === 'Upload') {return <UploadButtons {...args} />}
    if(type ===  'Color'){return <ColorButtons {...args} />}
}

MuiButton.propTypes = {
    type : PropTypes.oneOf([
        'Basic','Customize','Loading','IconColor', 'IconSize', 'Icon', 'IconLabel', 'Upload', 'Color'
    ])
}

MuiButton.default = {
    type : 'Basic'
}
