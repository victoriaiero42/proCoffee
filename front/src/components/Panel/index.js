import React, { useEffect, useState } from 'react';
import { useCombobox } from 'downshift';
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Item from '../Item/Item'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#d7d0c3',

  },
}));

export default function Panel() {
  const [result, setResult] = useState('');
  const [input, setInput] = useState([]);
  const [users, setUsers] = useState([]);


  const classes = useStyles();


  async function inputPost(event) {
    const text = event.target.value;
    const resp = await fetch('/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
      }),
    });
    const response = await resp.json();
    return setResult(response.newArray);
  }

  console.log(result);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: input,
    onInputValueChange: ({ inputValue }) => {
      setInput(
        users.filter((item) => item.name.toLowerCase().startsWith(inputValue.toLowerCase())),
      );
    },
  });

  return (
    <>
      <div {...getComboboxProps()}>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body2">
              <Paper className={classes.paper}>
                <Input
                  onChange={inputPost}
                  placeholder="Найти пачку кофе"
                  size="large"
                />
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Typography>
          </Grid>
        </Grid>
      </div>

      { result ? result.map((el) => {
        return <Item key={el._id} id={el._id} />
      }) : null}
    </>
  );
}
