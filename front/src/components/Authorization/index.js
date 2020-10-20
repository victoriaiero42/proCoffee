import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { startAuthenticateUserSaga } from '../../redux/actions/authActions';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import User from '../SignIn/Signin';

const useStyles = makeStyles((theme) => ({
  formPositioning: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#d7d0c3',
    margin: '0px 10px',
    // backgroundColor: '#424242',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#d7d0c3',

    marginTop: '10px',
    marginLeft: '10px',
    marginRight: '10px',

  },
  input: {
    '& label.Mui-focused': {
      color: '#A9A9A9',
    },
    button: {
      margin: '20px',
    },

  },
}));

function Authorization() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [name, setName] = useState('name');
  const [mail, setMail] = useState('email');
  const [password, setPassword] = useState('password');
  const [formData, setFormData] = useState({});
  const classes = useStyles();

  const handleChange = (e) => {
    e.persist();
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  function nameClick() {
    setName('enter your username');
  }

  function mailClick() {
    setMail('enter your email');
  }

  function passwordClick() {
    setPassword('enter your password');
  }

  async function handleClick() {
    dispatch(startAuthenticateUserSaga(formData));
  }

  return (
    <>
      { user
        ? <User />
        : (
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="body1">

                  <Paper className={classes.paper}> sign up </Paper>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <Paper className={classes.formPositioning}>
                    <form onChange={(e) => handleChange(e)} noValidate autoComplete="off">
                      <ErrorHandler />

                      <TextField fullWidth name="userName" onClick={nameClick} id="filled-size-normal" label={name} required />
                      <TextField fullWidth name="userEmail" onClick={mailClick} id="filled-size-normal" label={mail} required />
                      <TextField fullWidth name="userPassword" onClick={passwordClick} label={password} required />
                      <Button style={{ marginTop: '12px' }} onClick={handleClick} variant="outlined">sign up</Button>
                    </form>
                  </Paper>
                </Typography>
              </Grid>
            </Grid>
          </div>
        )}

    </>
  );
}
// variant="filled"

export default Authorization;
