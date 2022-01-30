import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Avatar,
    Box,
    Button,
    Card,
    Checkbox,
    Divider,
    IconButton,
    InputAdornment,
    Link,
    SvgIcon,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Tabs,
    TextField,
    Typography,
    makeStyles
} from '@material-ui/core';
import {
    Edit as EditIcon,
    ArrowRight as ArrowRightIcon,
    Search as SearchIcon
} from 'react-feather';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import DonationCharts from './DonationCharts';
const useStyles = makeStyles((theme) => ({
    root: {},
    queryField: {
        width: 500
    },
    bulkOperations: {
        position: 'relative'
    },
    bulkActions: {
        paddingLeft: 4,
        paddingRight: 4,
        marginTop: 6,
        position: 'absolute',
        width: '100%',
        zIndex: 2,
        backgroundColor: theme.palette.background.default
    },
    bulkAction: {
        marginLeft: theme.spacing(2)
    },
    avatar: {
        height: 42,
        width: 42,
        marginRight: theme.spacing(1)
    }
}));
function Results({ className, donor, ...rest}) {
  const classes = useStyles();
  console.log(donor);
  return (
    <Card className={clsx(classes.root, className)}
          {...rest}>
    <Box p={2}
        minHeight={56}
        display="flex"
        alignItems="center">
              <DonationCharts data={donor?.donationMonth}/>
    </Box>
    </Card>
  );
}

export default Results;
