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

export default function Panel() {
  const [input, setInput] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const classes = useStyles();

  const styleLi = { background: '#ede', width: '16em' };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((json) => setUsers(json));
  }, []);

  // console.log(users);

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
      <h1>{user}</h1>
      <div {...getComboboxProps()}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body2">
              <Paper className={classes.paper}>
                <Input
                  {...getInputProps()}
                  placeholder="Search"
                  enterbutton="Search"
                  size="large"
                />
                <Button style={{ margin: '8px' }}> find</Button>
              </Paper>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <ul style={{ listStyleType: 'none' }} {...getMenuProps()}>
        {isOpen
          && input.map((item, index) => (
            <span
              key={item.id}
              {...getItemProps({ item, index })}
              onClick={() => setUser(item.name)}
            >
              <li style={highlightedIndex === index ? styleLi : {}}>
                <h3>{item.name}</h3>
              </li>
            </span>
          ))}
      </ul>
    </>
  );
}
