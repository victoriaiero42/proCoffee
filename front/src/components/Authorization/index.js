import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startAuthenticateUserSaga } from '../../redux/actions/authActions';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import styles from './style.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 250,
      display: 'block',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: 20
      // width: '50',
    },
  },
  textBlock: {
    marginTop: 40
  },
  button: {
    fontSize: 20,
    fontWeight: '1000',
    color: '#fff',
    backgroundColor: '#424242;'
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

  const handleChange = e => {
    e.persist();
    setFormData((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      }
    })
  }

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
    dispatch(startAuthenticateUserSaga(formData))
  }
  
return (
  <>
    <div className={classes.textBlock}>
      <form onChange={(e) => handleChange(e)} className={classes.root} noValidate autoComplete="off">
        <h3>Registration</h3>
        <TextField name="username" onClick={nameClick} autoFocus id="filled-size-normal" label={name} variant="filled" required />
        <TextField name="email" onClick={mailClick} id="filled-size-normal" label={mail} variant="filled" required />
        <TextField name="password" onClick={passwordClick} id="filled-size-normal" label={password} variant="filled" required />
        <Button className={classes.button} onClick={handleClick} variant="outlined">Default</Button>
      </form>
    </div>
  </>
)
}

export default Authorization;
