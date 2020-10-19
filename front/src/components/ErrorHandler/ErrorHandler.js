import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      // marginTop: theme.spacing(2),
      marginTop: "30px"
    },
  },
}));

function ErrorHandler() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Alert variant="outlined" severity="error">
        This is an error alert — check it out!
      </Alert> */}
      <Alert variant="outlined" severity="warning">
        This is a warning alert — check it out!
      </Alert>
    </div>
  );
}

export default ErrorHandler
