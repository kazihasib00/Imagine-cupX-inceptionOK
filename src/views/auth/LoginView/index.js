import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import {
  Avatar,
  Button,
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Typography,
  colors,
  makeStyles,
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import LockIcon from '@material-ui/icons/Lock'
import Page from './../../../components/Page'
import Logo from './../../../components/Logo'
import LoginForm from './LoginForm'
import { loginRequest } from '../../../authConfig'
import { useMsal } from '@azure/msal-react'
import { useIsAuthenticated } from '@azure/msal-react'
import { setUserData } from '../../../actions/accountActions'
import { useDispatch } from 'react-redux'
import { callMsGraph } from '../../../graph'

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    paddingTop: 80,
    position: 'relative',
  },
  backButton: {
    marginLeft: theme.spacing(2),
  },
  card: {
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%',
    },
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4),
  },
  icon: {
    backgroundColor: colors.green[500],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  container: {
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  motto: {
    color: 'white',
    marginBottom: '1rem',
  },
}))

function LoginView() {
  const { instance, accounts, inProgress } = useMsal()

  const [accessToken, setAccessToken] = useState(null)
  const [graphData, setGraphData] = useState(null)

  const name = accounts[0] && accounts[0].name

  const isAuthenticated = useIsAuthenticated()
  const dispatch = useDispatch()

  function RequestAccessToken() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    }

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then(response => {
        setAccessToken(response.accessToken)
      })
      .catch(e => {
        instance.acquireTokenPopup(request).then(response => {
          setAccessToken(response.accessToken)
        })
      })
  }

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    }

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then(response => {
        callMsGraph(response.accessToken).then(response =>
          setGraphData(response)
        )
      })
      .catch(e => {
        instance.acquireTokenPopup(request).then(response => {
          callMsGraph(response.accessToken).then(response =>
            setGraphData(response)
          )
        })
      })
  }

  useEffect(() => {
    if (!isAuthenticated) return

    if (!accessToken) {
      RequestAccessToken()
    }

    if (accessToken && !graphData) {
      RequestProfileData()
    }

    if (graphData) {
      let user = {
        name: '',
      }

      if (graphData.displayName) {
        user.name = graphData.displayName
      } else {
        user.name = graphData.userPrincipalName
      }

      dispatch(setUserData(user))
    }
  }, [isAuthenticated, accessToken, graphData])

  const classes = useStyles()
  const history = useHistory()

  const handleSubmitSuccess = () => {
    history.push('/app')
  }

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch(e => {
      console.error(e)
    })
  }

  return (
    <Page className={classes.root} title="Login">
      {/* <img
        src="/media/logo.png"
        style={{
          position: 'absolute',
          zIndex: 20,
          width: 150,
          height: 150,
          top: 20,
          left: 20,
          right: 0,
          borderRadius: 10,
        }}
        alt="Logo"
      /> */}

      <video
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 10,
          objectFit: 'none',
        }}
      >
        <source src="/media/mesh.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: 20,
        }}
      ></div>
      <Container maxWidth="sm" className={classes.container}>
        <Typography align="center" variant="h2" className={classes.motto}>
          Save a Soul, Impact on Your Life Style
        </Typography>
        <Button
          color="secondary"
          size="large"
          type="submit"
          variant="contained"
          onClick={handleLogin}
          className={classes.loginButton}
        >
          Log In
        </Button>
      </Container>
    </Page>
  )
}

export default LoginView
