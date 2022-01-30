import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {
  Avatar,
  Box,
  Card,
  Typography,
  makeStyles,
  Snackbar,
  Button,
  IconButton,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import VerifiedUserRounded from '@material-ui/icons/VerifiedUserRounded'

// import Label from 'src/components/Label';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  label: {
    marginLeft: theme.spacing(1),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48,
  },
}))

function SubItem({ className, title, value, ...rest }) {
  const classes = useStyles()
  const data = {
    value: value,
  }

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <Card
      onClick={handleClick}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box flexGrow={1}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="textSecondary"
        >
          {title}
        </Typography>
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Typography variant="h3" color="textPrimary">
            {data.value}
          </Typography>
        </Box>
      </Box>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Successfully susbcribed!"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </Card>
  )
}

SubItem.propTypes = {
  className: PropTypes.string,
}

export default SubItem
