import React, { useState } from 'react'
import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  makeStyles,
  Card,
  Paper,
  Typography,
  Snackbar,
  Button,
  IconButton,
  Grid,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import Page from './../../../components/Page'
import Header from './Header'
import General from './General'
import Subscription from './Subscription'
import Notifications from './Notifications'
import Security from './Security'
import { divide } from 'lodash'
import SubItem from './SubItem'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },

  subItem: {
    padding: '1rem',
    fontWeight: 'bold',
  },

  subButton: {
    fontWeight: 'bold',
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64,
    },
  },
}))

function AccountView() {
  const classes = useStyles()
  const [currentTab, setCurrentTab] = useState('general')
  const tabs = [
    { value: 'general', label: 'General' },
    { value: 'subscription', label: 'Subscription' },
    { value: 'notifications', label: 'Notifications' },
    { value: 'security', label: 'Security' },
  ]

  const handleTabsChange = (event, value) => {
    setCurrentTab(value)
  }

  return (
    <Page className={classes.root} title="Settings">
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            value={currentTab}
            variant="scrollable"
            textColor="secondary"
            className={classes.tabs}
          >
            {tabs.map(tab => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box mt={3}>
          {currentTab === 'general' && <General />}
          {currentTab === 'subscription' && (
            <Container maxWidth={false} className={classes.container}>
              <Grid container spacing={3}>
                <Grid item lg={3} sm={6} xs={12}>
                  <SubItem title={'3 months access'} value={'$5'} />
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                  <SubItem title={'6 months access'} value={'$3'} />
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                  <SubItem title={'12 months access'} value={'$1.5'} />
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                  <SubItem
                    title={'Life time access'}
                    value={'Be a volunteer'}
                  />
                </Grid>
              </Grid>
            </Container>
          )}
          {currentTab === 'notifications' && <Notifications />}
          {currentTab === 'security' && <Security />}
        </Box>
      </Container>
    </Page>
  )
}

export default AccountView
