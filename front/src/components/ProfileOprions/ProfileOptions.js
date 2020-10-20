import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import StarRateIcon from '@material-ui/icons/StarRate';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // maxWidth: 360,
    backgroundColor: '#d7d0c3',
    margin: '25px auto',
    borderRadius: '25px'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  paper: {
    backgroundColor: '#d7d0c3',
  }
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper className={classes.paper}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        // <ListSubheader component="div" id="nested-list-subheader">
        //   Nested List Items
        // </ListSubheader>
        // }
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <FavoriteBorderIcon />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarRateIcon />
          </ListItemIcon>
          <ListItemText primary="My Coffee" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <FreeBreakfastIcon />
          </ListItemIcon>
          <ListItemText primary="Wish List" />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </ListItem>
      </List>
    </Paper>
  );
}
