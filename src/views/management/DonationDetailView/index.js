import React, {
    useCallback,
    useState,
    useEffect,
} from 'react';

import {
    useParams
} from 'react-router-dom';
import {
    Box,
    Container,
    Divider,
    Tab,
    Tabs,
    makeStyles
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Page from '../../../components/Page';
import useIsMountedRef from './../../../hooks/useIsMountedRef';
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

function DonationDetailsView() {
    const classes = useStyles();
    const isMountedRef = useIsMountedRef();
    const [donor, setDonor] = useState();
    const [currentTab, setCurrentTab] = useState('details');
    const account = useSelector((state) => state.account);
    const { id } = useParams();
    const searchId = id


    useEffect(() => {
        const userData = data.donations.filter((i) => i.id == searchId)
        setDonor(userData[0])
    }, [])

    console.log('user', donor?.donationMonth);

    if (!donor) {
        return null;
    }

  return (
      <Page className={classes.root}
          title="Donor Details">
        <Container maxWidth={false}>
            <Header donor={donor}/>
        {
        donor && (
        <Box mt={3}>
            <Results donor={donor}/>
        </Box>
        )
        }
        </Container>
      </Page>
  );
}

export default DonationDetailsView;
