import React from 'react'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'
import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import {
  Box,
  Button,
  TextField,
  FormHelperText,
  makeStyles,
} from '@material-ui/core'
import { login } from './../../../actions/accountActions'

const useStyles = makeStyles(() => ({
  root: {},
}))

function LoginForm({ className, onSubmitSuccess, ...rest }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={{
        emailOrPhone: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        emailOrPhone: Yup.string('Enter your Email/Phone Number')
          // .email("Enter a valid email")
          .required('Email/Phone Number is required')
          .test('test-name', 'Enter Valid Phone/Email', function(value) {
            const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

            const phoneRegex = /^([0-9]{11,11}(-[0-9]*){0,1}|([\w-]+(?:\.[\w-]+)*)+@\w+\.\w{2,3})$/
            let isValidEmail = emailRegex.test(value)
            let isValidPhone = phoneRegex.test(value)
            if (!isValidEmail && !isValidPhone) {
              return false
            }
            return true
          }),
        password: Yup.string()
          .max(255)
          .required('Password is required'),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await dispatch(login(values.emailOrPhone, values.password))
          onSubmitSuccess()
        } catch (error) {
          console.log({ error })
          const message = error.message || 'Something went wrong'

          setStatus({ success: false })
          setErrors({ submit: message })
          setSubmitting(false)
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
        values,
      }) => (
        <form
          noValidate
          className={clsx(classes.root, className)}
          onSubmit={handleSubmit}
          {...rest}
        >
          <TextField
            error={Boolean(touched.emailOrPhone && errors.emailOrPhone)}
            fullWidth
            autoFocus
            helperText={touched.emailOrPhone && errors.emailOrPhone}
            label="Phone Number/Email Address"
            margin="normal"
            name="emailOrPhone"
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            value={values.emailOrPhone}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <Box mt={2}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Log In
            </Button>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
          </Box>
        </form>
      )}
    </Formik>
  )
}

LoginForm.propTypes = {
  className: PropTypes.string,
  onSubmitSuccess: PropTypes.func,
}

LoginForm.defaultProps = {
  onSubmitSuccess: () => {},
}

export default LoginForm
