import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import Header from './Header';
import Results from './Results';
const data = require('./../../../assets/donations.json')

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));



function DonationList() {
  const classes = useStyles();
  const [donations, setDonationList] = useState([]);

  useEffect(() => {
    setDonationList(data.donations)
  }, [])

  if (!donations) {
    return null;
  }
  // console.log(donations);

  return (
    <Page className={classes.root} title="Donation List">
      <Container maxWidth={false}>
        <Header/>
        {
        donations && (
            <Box mt={3}>
              <Results donations={donations}/>
            </Box>
        )
        }
      </Container>
    </Page>
  );
}

export default DonationList;
