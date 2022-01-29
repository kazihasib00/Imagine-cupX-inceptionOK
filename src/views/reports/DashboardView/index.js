import React from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'
import Page from './../../../components/Page'
import Header from './Header'
import ActiveUsers from './ActiveUsers'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64,
    },
  },
}))

function DashboardView() {
  const classes = useStyles()

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false} className={classes.container}>
        <Header />
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xs={12}>
            <ActiveUsers title={'Volunteers'} value={17} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ActiveUsers title={'Monitoring'} value={88} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ActiveUsers title={'Recovered'} value={9} />
          </Grid>
        </Grid>

        <div
          style={{
            position: 'relative',
          }}
        >
          <iframe
            height={600}
            style={{ width: '100%', marginTop: '2rem' }}
            scrolling="no"
            title="React Game- Elephant Taco Hunt"
            src="https://codepen.io/sdras/embed/YWBdQd?default-tab=result"
            frameBorder="no"
            loading="lazy"
            allowTransparency="true"
            allowFullScreen="true"
          >
            See the Pen &lt;a href="https://codepen.io/sdras/pen/YWBdQd"&gt;
            React Game- Elephant Taco Hunt&lt;/a&gt; by Sarah Drasner (&lt;a
            href="https://codepen.io/sdras"&gt;@sdras&lt;/a&gt;) on &lt;a
            href="https://codepen.io"&gt;CodePen&lt;/a&gt;.
          </iframe>
          <div
            style={{
              position: 'absolute',
              top: 32,
              width: '100%',
              height: 53,
              backgroundColor: '#f4f6f8',
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              bottom: 4,
              width: '100%',
              height: 32,
              backgroundColor: '#f4f6f8',
            }}
          ></div>
        </div>
      </Container>
    </Page>
  )
}

export default DashboardView
