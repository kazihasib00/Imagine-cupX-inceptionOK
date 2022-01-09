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
  makeStyles
} from '@material-ui/core';
import axios from './../../../utils/callApi';
import Page from './../../../components/Page';
import useIsMountedRef from './../../../hooks/useIsMountedRef';
import UserEditForm from './UserEditForm';
import Header from './Header';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function UserEditView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [user, setUser] = useState(null);
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
  }, [isMountedRef])

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!user) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="User Edit"
    >
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <UserEditForm user={user} />
        </Box>
      </Container>
    </Page>
  );
}

export default UserEditView;
