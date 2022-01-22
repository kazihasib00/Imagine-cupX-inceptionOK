import React, { useEffect, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { useMsal } from '@azure/msal-react'
import { useIsAuthenticated } from '@azure/msal-react'
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
} from '@material-ui/core'
// import { logout } from 'src/actions/accountActions';
import { logout } from '../../../actions/accountActions'
import { setUserData } from '../../../actions/accountActions'

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },
  popover: {
    width: 200,
  },
}))

function Account() {
  const classes = useStyles()
  const history = useHistory()
  const ref = useRef(null)
  const dispatch = useDispatch()
  const account = useSelector(state => state.account)
  console.log({ account })
  const { enqueueSnackbar } = useSnackbar()
  const [isOpen, setOpen] = useState(false)
  const { instance } = useMsal()
  const isAuthenticated = useIsAuthenticated()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // const handleLogout = async () => {
  //   try {
  //     handleClose()
  //     await dispatch(logout())
  //     history.push('/')
  //   } catch (error) {
  //     enqueueSnackbar('Unable to logout', {
  //       variant: 'error',
  //     })
  //   }
  // }

  function handleLogout(instance) {
    instance.logoutPopup().catch(e => {
      console.error(e)
    })
  }

  useEffect(() => {
    if (isAuthenticated) {
      return
    }

    history.push('/')
    dispatch(setUserData(null))
  }, [isAuthenticated])

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        {/* <Avatar
          alt="User"
          className={classes.avatar}
          src={account.user.profileImage}
        /> */}
        <Hidden smDown>
          <Typography variant="h6" color="inherit">
            {`${account.user.name}`}
          </Typography>
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem onClick={() => handleLogout(instance)}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default Account
