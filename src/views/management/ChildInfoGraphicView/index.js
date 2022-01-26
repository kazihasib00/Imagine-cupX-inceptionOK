import { Box, Container, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Page from '../../../components/Page';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import Results from './Results/Results';

const data = require('./../../../assets/child.json')

const useStyles = makeStyles((theme)=>({
  root:{
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function ChildInfoGraphicView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [users,setUserList] = useState([])
  const account = useSelector((state)=>state.account)

  useEffect(()=>{
    setUserList(data.childs)
  },[])

  if(!users){
    return null;
  }

  console.log(users);

  return (
  <Page className={classes.root} title="Infographic List">
    <Container maxWidth={false}>
      {
      users && (
        <Box mt={3}>
          <Results users={users}/>
        </Box>
      )
      }
    </Container>
  </Page>
  );
}

export default ChildInfoGraphicView;
