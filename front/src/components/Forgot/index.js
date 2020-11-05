import React from 'react';
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  search: {
    padding: '',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#d7d0c3',
  },
}));

export default function Forgot() {
  const history = useHistory();

  async function allText(event) {
    event.preventDefault();
    const targetText = event.target.input.value;
    const resp = await fetch('/restoreApi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        targetText,
      }),
    });
    const response = await resp.json();
  }

  const classes = useStyles();

  function redirect() {
    history.push('/signin');
  }
  return (
    <>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body2">
              <Paper className={classes.paper}>
                <form onSubmit={allText}>
                  <Input
                    name="input"
                    placeholder="Введите Вашу почту"
                    enterbutton="email"
                    size="large"
                  />
                  <Button type="submit" onClick={redirect} style={{ margin: '8px' }}> find</Button>
                </form>
              </Paper>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
