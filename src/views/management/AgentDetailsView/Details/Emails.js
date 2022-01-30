import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  makeStyles
} from '@material-ui/core';
import MaiIcon from '@material-ui/icons/MailOutline';
import axios from './../../../../utils/callApi';
import useIsMountedRef from './../../../../hooks/useIsMountedRef';

const useStyles = makeStyles((theme) => ({
  root: {},
  actionIcon: {
    marginRight: theme.spacing(1)
  },
  cell: {
    padding: theme.spacing(1)
  }
}));

const emailOptions = [
  'Send password reset',
  'Send verification code',
  'Send Short Message',
];



function Emails({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [emailOption, setEmailOption] = useState(emailOptions[0]);
  const [emails, setEmails] = useState(null);
  const [daysWorth, setDaysWorth] = useState()
  const [count, setCount] = useState()

  const handleDaysChange = (e) => {
    e.preventDefault()
    setDaysWorth(e.target.value)
  }

  const handleCountChange = (e) => {
    e.preventDefault()
    setCount(e.target.value)
  }

  function activationCodeContent() {
    return (
      <Box mt={2}>
        <TextField fullWidth placeholder='Short Message' onChange={(e) => handleDaysChange(e)} />

        <TextField mt={2} fullWidth placeholder='Short Message' onChange={(e) => handleDaysChange(e)} />
        {/* <TextField placeholder='Total Keys' onChange={e => handleCountChange(e)} /> */}
      </Box>
    )
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Send" />
      <Divider />
      <CardContent>
        <TextField
          fullWidth
          name="option"
          onChange={(event) => setEmailOption(event.target.value)}
          select
          SelectProps={{ native: true }}
          value={emailOption}
          variant="outlined"
        >
          {emailOptions.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </TextField>

        {emailOption === 'Send Short Message' ? <Box>
          {activationCodeContent}
        </Box> : ''}

        <Box mt={2}>
          <Button
            variant="contained"
          >
            <MaiIcon className={classes.actionIcon} />
            Send
          </Button>
        </Box>
        {emails && (
          <Box mt={2}>
            <Table>
              <TableBody>
                {emails.map((email) => (
                  <TableRow key={email.id}>
                    <TableCell className={classes.cell}>
                      {moment(email.createdAt).format('DD/MM/YYYY | HH:MM')}
                    </TableCell>
                    <TableCell className={classes.cell}>
                      {email.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

Emails.propTypes = {
  className: PropTypes.string,
  emails: PropTypes.array
};

export default Emails;
