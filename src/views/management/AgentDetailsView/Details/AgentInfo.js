import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
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

const useStyles = makeStyles((theme) => ({
    root: {},
    fontWeightMedium: {
        fontWeight: theme.typography.fontWeightMedium
    },
    actionIcon: {
        marginRight: theme.spacing(1)
    }
}));

function AgentInfo({agent,className,...rest}){
    const classes = useStyles();

    return (
    <Card className={clsx(classes.root, className)}
    {...rest}>
    <CardHeader title="Volunteer info" />
    <Divider />

    <Table>
    <TableBody>
    <TableRow>
    <TableCell className={classes.fontWeightMedium}>
        Name
    </TableCell>
    <TableCell>
    <Typography
        variant="body1"
        color="textPrimary"
    >
            {agent.name}
    </Typography>
    </TableCell>
    </TableRow>

    <TableRow>
    <TableCell className={classes.fontWeightMedium}>
        Age
    </TableCell>
    <TableCell>
    <Typography
        variant="body2"
        color="textSecondary"
    >
        {agent.age}
    </Typography>

    </TableCell>
    </TableRow>
    <TableRow>
    <TableCell className={classes.fontWeightMedium}>
                            Address
    </TableCell>
    <TableCell>
        <Typography
            variant="body2"
                                color="textSecondary"
                            >
        {agent.address} , {agent.city}
                            </Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={classes.fontWeightMedium}>
                            Phone
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                            >
                                {agent.phone}
                            </Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={classes.fontWeightMedium}>
                            Email
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                            >
                                {agent.email}
                            </Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={classes.fontWeightMedium}>
                            Coverage Area
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                            >
                                {agent.coverage_area}
                            </Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={classes.fontWeightMedium}>
                        Total Collected HomeLess
                        </TableCell>
                        <TableCell>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                            >
                                {agent.total_collected}
                            </Typography>
                        </TableCell>
                    </TableRow>        

                </TableBody>
            </Table>
    </Card>
    )
}

AgentInfo.propTypes = {
    className: PropTypes.string,
    agent: PropTypes.object.isRequired
};

export default AgentInfo;
