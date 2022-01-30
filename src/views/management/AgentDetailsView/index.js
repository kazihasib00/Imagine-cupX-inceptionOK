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
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import Page from '../../../components/Page';
import Header from './Header';
import Details from './Details';

const data = require('./../../../assets/agent.json')

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}));

function AgentDetailsView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [agent,setAgent] = useState(null);
  const { id } = useParams();
  const searchId = id
  useEffect(()=>{
      const agentData = data.agents.filter((i)=>i.id == searchId)
      setAgent(agentData[0])
  },[])
  
//   console.log('agent',agent);

  if(!agent){
      return null;
  }

  return (
    <Page className={classes.root} title="Volunteer Details">
        <Container maxWidth={false}>
            <Header agent={agent}/>
            <Box mt={3}>
                <Details agent={agent}/>
            </Box>
        </Container>
    </Page>
  );
}

export default AgentDetailsView;
