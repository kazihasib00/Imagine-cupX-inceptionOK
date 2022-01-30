import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, makeStyles } from '@material-ui/core';
import AgentInfo from './AgentInfo';

const useStyles = makeStyles(() => ({
    root: {}
}));

function Details ({agent,className,...rest}){
    const classes = useStyles();

    return (
    <Grid 
            className={clsx(classes.root, className)}
            container
            spacing={3}
            {...rest}
    >
            <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
            >
            <AgentInfo agent={agent}/>
            </Grid>

            <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
            >
                {/* <Emails /> */}
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
            >
            </Grid>
    </Grid>
    )
}


Details.propTypes = {
    className: PropTypes.string,
    agent: PropTypes.object.isRequired
};

export default Details;