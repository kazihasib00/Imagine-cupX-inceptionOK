import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Switch,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import wait from './../../../utils/wait';

const useStyles = makeStyles(() => ({
  root: {}
}));

function UserEditForm({
  className,
  user,
  ...rest
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Formik
      initialValues={{
        addressLine1: user.addressLine1 || '',
        addressLine1: user.addressLine2 || '',
        effectiveRegion: user.effectiveRegion || '',
        email: user.email || '',
        name: user.name || '',
        phoneNumber: user.phoneNumber || '',
        isVerified: user.isVerified || false
      }}
      validationSchema={Yup.object().shape({
        addressLine1: Yup.string().max(255),
        addressLine1: Yup.string().max(255),
        effectiveRegion: Yup.string().max(255),
        email: Yup.string().max(255),
        name: Yup.string().max(255).required('Name is required'),
        phoneNumber: Yup.string().max(15),
        isVerified: Yup.bool()
      })}
      onSubmit={async (values, {
        resetForm,
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          // Make API request
          await wait(500);
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('User updated', {
            variant: 'success',
            action: <Button>See all</Button>
          });
        } catch (error) {
          setStatus({ success: false });
          setErrors({ submit: error.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
          <form
            className={clsx(classes.root, className)}
            onSubmit={handleSubmit}
            {...rest}
          >

            <Card>
              <CardContent>

                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      label="Email address"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      value={user.email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      error={Boolean(touched.name && errors.name)}
                      fullWidth
                      helperText={touched.name && errors.name}
                      label="Full name"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      value={values.name}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                      fullWidth
                      helperText={touched.phoneNumber && errors.phoneNumber}
                      label="Phone number"
                      name="phone"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phoneNumber}
                      variant="outlined"
                      disabled
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      error={Boolean(touched.effectiveRegion && errors.effectiveRegion)}
                      fullWidth
                      helperText={touched.effectiveRegion && errors.effectiveRegion}
                      label="Country"
                      name="country"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.effectiveRegion}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      error={Boolean(touched.addressLine1 && errors.addressLine1)}
                      fullWidth
                      helperText={touched.addressLine1 && errors.addressLine1}
                      label="Address 1"
                      name="address1"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.addressLine1}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      error={Boolean(touched.addressLine2 && errors.addressLine2)}
                      fullWidth
                      helperText={touched.addressLine2 && errors.addressLine2}
                      label="Address 2"
                      name="address2"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.addressLine2}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item />
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <Switch
                      checked={values.isVerified}
                      color="secondary"
                      edge="start"
                      name="verified"
                      onChange={handleChange}
                      value={values.isVerified}
                      label="User Verified"
                    />             
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Update User
                </Button>
                </Box>
              </CardContent>
            </Card>
          </form>
        )}
    </Formik>
  );
}

UserEditForm.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default UserEditForm;
