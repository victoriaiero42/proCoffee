import React, { useState } from 'react';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import styles from './style.module.css';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 250,
//       display: 'block',
//       marginRight: 'auto',
//       marginLeft: 'auto',
//       marginTop: 20
//       // width: '50',
//     },
//   },
//   textBlock: {
//     margin: "40 auto",
//     // display: "flex",
//     // alignAtems: "center"
//   },
//   button: {
//     fontSize: 20,
//     fontWeight: '1000',
//     color: '#fff',
//     backgroundColor: '#424242;'
//   },
// }));
const useStyles = makeStyles((theme) => ({
  formPositioning: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: "#424242",
    margin: "0px 10px",
    // width: "50%"
    // marginTop: "0px",
    // marginLeft: "10px",
    // marginRight: "10px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: "#424242",
    marginTop: "10px",
    marginLeft: "10px",
    marginRight: "10px"

  },
  input: {
    '& label.Mui-focused': {
      color: '#A9A9A9',
    },
    // width: "400px"
  }
}))


function Authorization() {
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
    const request = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData,
      }),
    })
    const response = await request.json();
    console.log(response);
  }
  // className={classes.textBlock}
  // className={classes.button}
  // className={classes.root} 
  return (
    <>

      <div className={classes.root}>
        <Grid container spacing={1}>

          {/* <div className={classes.inputStyles}> */}
          {/* <form onChange={(e) => handleChange(e)} noValidate autoComplete="off">
            <h3>Registration</h3>
            <TextField name="userName" onClick={nameClick} autoFocus id="filled-size-normal" label={name} variant="filled" required />
            <TextField name="userEmail" onClick={mailClick} id="filled-size-normal" label={mail} variant="filled" required />
            <TextField name="userPassword" onClick={passwordClick} id="filled-size-normal" label={password} variant="filled" required />
            <Button onClick={handleClick} variant="outlined">Default</Button>
          </form> */}
          {/* InputProps={{ className: classes.input }}  */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <Paper className={classes.paper}> register </Paper>
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography variant="body1">
              <Paper className={classes.formPositioning}>
                <form onChange={(e) => handleChange(e)} noValidate autoComplete="off">
                  <TextField color="gray" fullWidth={true} name="userName" onClick={nameClick} id="filled-size-normal" label={name} variant="filled" required />
                  <TextField fullWidth={true} name="userEmail" onClick={mailClick} id="filled-size-normal" label={mail} variant="filled" required />
                  <TextField fullWidth={true} name="userPassword" onClick={passwordClick} label={password} variant="filled" required />
                  <Button onClick={handleClick} variant="outlined">Default</Button>
                </form>
              </Paper>
            </Typography>
          </Grid>
        </Grid>
      </div>
      {/* </div> */}
    </>
  )
}

export default Authorization;
