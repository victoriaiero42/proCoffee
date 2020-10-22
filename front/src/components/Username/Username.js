import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfileOptions from '../ProfileOprions/ProfileOptions';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Logout from '../LogoutButton/index'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '13px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#d7d0c3',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth)

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12}>

          <Paper className={classes.paper}>
            {/* <Logout /> */}
            {user ? <Typography variant="body1" component="p">
              Привет, {user.id.login} ☕
        </Typography> : ''}
          </Paper>
        </Grid>
      </Grid>
      <ProfileOptions />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Logout />
      </div>

    </div>
  );
}
