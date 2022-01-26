import React from 'react';
import { AgeChild, BasicNeed, EducationInfo, ExampleChart } from '../../../../Charts';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
    makeStyles
} from '@material-ui/core';
import clsx from 'clsx';
import { experimentalStyled as styled } from '@mui/material/styles';


// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Results({ user, className, ...rest }) {
    // const classes = useStyles();

    return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={6} md={6}>
                 <ExampleChart/>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
                <BasicNeed/>
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
                <AgeChild />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <EducationInfo />
            </Grid>
        </Grid>
    </Box>
    );
}

export default Results;
