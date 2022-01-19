import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {},
  name: {
    marginTop: theme.spacing(1)
  },
  avatar: {
    height: 100,
    width: 100
  }
}));

function ProfileDetails({ user, className, ...rest }) {
  const classes = useStyles();
  const account = useSelector((state) => state.account);
  console.log({ account });

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          <Typography
            className={classes.name}
            gutterBottom
            variant="h3"
            color="textPrimary"
          >
            {`${account.user.name}`}
          </Typography>
          {/* <Typography
            color="textPrimary"
            variant="body1"
          >
            {`${user.state}, ${user.country}`}
          </Typography> */}
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        {/* <Button
          fullWidth
          variant="text"
        >
          Remove picture
        </Button> */}
      </CardActions>
    </Card>
  );
}

ProfileDetails.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default ProfileDetails;
