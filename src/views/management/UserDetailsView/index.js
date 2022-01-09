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
import axios from './../../../utils/callApi';
import useIsMountedRef from './../../../hooks/useIsMountedRef';
import Header from './Header';
import Details from './Details';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function UserDetailsView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [user, setUser] = useState(null);
  const [currentTab, setCurrentTab] = useState('details');
  const account = useSelector((state) => state.account);
  const { serial } = useParams();

  const getUser = useCallback(() => {
    axios
      .post('/admin--get-user-details', { apiKey: account.user.apiKey, serial: serial })
      .then((response) => {
        console.log({response})
        if (isMountedRef.current) {
          setUser(response.data.data);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!user) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="User Details"
    >
      <Container maxWidth={false}>
        <Header user={user} />
        <Box mt={3}>
          <Details user={user} />
        </Box>
      </Container>
    </Page>
  );
}

export default UserDetailsView;
