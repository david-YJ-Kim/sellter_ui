import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const  MuiTitle = ({text}) => {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {text}
        </Typography>
    );
}

MuiTitle.propTypes = {
    text: PropTypes.string,
};

export default MuiTitle;