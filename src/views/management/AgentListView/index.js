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
import { useSelector } from 'react-redux';
import callApi from './../../../utils/callApi';
import Page from './../../../components/Page';
import useIsMountedRef from './../../../hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';
import getFullName from './../../../utils/getFullName';

const data = require('./../../../assets/agent.json')
// console.log('aaa',data);

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}));

function AgentListView() {
    const classes = useStyles();
    const isMountedRef = useIsMountedRef();
    const [agents, setAgentList] = useState([]);
    const account = useSelector((state) => state.account);

    // const getUserList = useCallback(() => {
    //   callApi
    //     .post('/admin--get-user-list', { apiKey: account.user.apiKey })
    //     .then((response) => {
    //       console.log({ response });
    //       if (isMountedRef.current) {
    //         setUserList(response.data.data);
    //       }
    //     });
    // }, [isMountedRef]);

    // useEffect(() => {
    //   getUserList();
    // }, [getUserList]);

    useEffect(() => {
        setAgentList(data.agents)
    }, [])

    if (!agents) {
        return null;
    }
    console.log(agents);

    return (
        <Page
            className={classes.root}
            title="Agent List"
        >
            <Container maxWidth={false}>
                <Header />
                {agents && (
                    <Box mt={3}>
                        <Results agents={agents} />
                    </Box>
                )}
            </Container>
        </Page>
    );
}

export default AgentListView;
