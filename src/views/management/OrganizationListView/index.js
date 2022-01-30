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
import Page from '../../../components/Page';
import useIsMountedRef from './../../../hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';


const data = require('./../../../assets/orgs.json')

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}));


function OrganizationListView(){
    const classes = useStyles();
    const isMountedRef = useIsMountedRef();
    const [organizations, setOrganizationList] = useState([]);
    const account = useSelector((state) => state.account);

    useEffect(() => {
        setOrganizationList(data.orgs)
    }, [])

    if(!organizations){
        return null
    }
    console.log(organizations);

    return (
        <Page className={classes.root}
            title="Organization List">
        <Container maxWidth={false}>
        <Header/>
    {
        organizations && (
        <Box mt={3}>
        <Results organizations={organizations}/>
        </Box>
        )
    }
        </Container>
        </Page>
    )
}

export default OrganizationListView