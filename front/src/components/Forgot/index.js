import React, { useEffect, useState } from 'react';
import { useCombobox } from 'downshift';
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  search: {
    padding: '',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#d7d0c3',
    // marginTop: '10px',
    // marginLeft: '10px',
    // marginRight: '10px',

  },
}));

export default function Forgot() {
  const [valueInput, setValueInput] = useState('');

  async function allText(event) {
    event.preventDefault();
    const targetText = event.target.input.value;
    console.log(targetText);
    const resp = await fetch('/restoreApi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        targetText,
      }),
    });
    const response = await resp.json();
    console.log(response);
    // return setResult(response.newArray);
  }

  const classes = useStyles();

  const styleLi = { background: '#ede', width: '16em' };
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
                  <Button type="submit" style={{ margin: '8px' }}> find</Button>
                </form>
              </Paper>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
