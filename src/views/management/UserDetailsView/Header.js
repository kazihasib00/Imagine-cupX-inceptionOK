import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Edit as EditIcon } from 'react-feather';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  root: {},
  actionIcon: {
    marginRight: theme.spacing(1)
  }
}));

function Header({ className, user, ...rest }) {
  const classes = useStyles();

  console.log({user});

  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/app/management"
            component={RouterLink}
          >
            Management
          </Link>

          <Link
            variant="body1"
            color="inherit"
            to="/app/management/users"
            component={RouterLink}
          >
            Users
          </Link>

          <Typography
            variant="body1"
            color="textPrimary"
          >
            {user.serial}
          </Typography>
        </Breadcrumbs>
        <Typography
          variant="h3"
          color="textPrimary"
        >
          {user.fullName}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          color="secondary"
          variant="contained"
          component={RouterLink}
          to={`/app/management/users/${user.serial}/edit`}
        >
          <SvgIcon
            fontSize="small"
            className={classes.actionIcon}
          >
            <EditIcon />
          </SvgIcon>
          Edit
        </Button>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default Header;
