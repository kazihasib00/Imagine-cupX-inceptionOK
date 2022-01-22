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
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PersonIcon from '@material-ui/icons/PersonOutline';
import Label from './../../../../components/Label';
import { ExampleChart } from '../../../../Charts';

const getFullName = (data) => {
  var first, honorifics, last, middle;
  if (typeof data === "object") {
    honorifics = '';
    first = '';
    last = '';
    middle = '';
    if ((data != null ? data.honorifics : void 0) != null) {
      honorifics = data.honorifics + ". ";
    }
    if ((data != null ? data.first : void 0) != null) {
      first = data.first;
    }
    if ((data != null ? data.middle : void 0) != null) {
      middle = " " + data.middle;
    }
    if ((data != null ? data.last : void 0) != null) {
      last = " " + data.last;
    }
    return honorifics + first + middle + last;
  } else {
    return data;
  }
}

const useStyles = makeStyles((theme) => ({
  root: {},
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium
  },
  actionIcon: {
    marginRight: theme.spacing(1)
  }
}));

function UserInfo({ user, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="User info" />
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
                {getFullName(user.name)}
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
                {user.age}
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
                {user.address} , {user.city}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Education
            </TableCell>
            <TableCell>
              <Typography
                variant="body2"
                color="textSecondary"
              >
                {user.education}
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.fontWeightMedium}>
              Job
            </TableCell>
            <TableCell>
              <Typography
                variant="body2"
                color="textSecondary"
              >
                {user.job}
              </Typography>
            </TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
      <ExampleChart/>
    </Card>
  );
}

UserInfo.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default UserInfo;
