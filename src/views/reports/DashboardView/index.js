import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from './../../../components/Page';
import Header from './Header';
import ActiveUsers from './ActiveUsers';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64
    }
  }
}));

function DashboardView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container
        maxWidth={false}
        className={classes.container}
      >
        <Header />
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <ActiveUsers title={'Child'} value={34} />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <ActiveUsers title={'Volunteer'} value={34}/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xs={12}
          >
            <ActiveUsers title={'Organization'} value={34}/>
          </Grid>
          
        </Grid>
      </Container>
    </Page>
  );
}

export default DashboardView;
