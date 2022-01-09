import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

function UserCreateForm({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      UserCreateForm
    </div>
  );
}

UserCreateForm.propTypes = {
  className: PropTypes.string
};

export default UserCreateForm;
