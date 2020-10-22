import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { useSelector } from 'react-redux';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    // backgroundColor: "#424242",
    backgroundColor: '#d7d0c3',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  // const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      style={{
        marginBottom: '0px',
        boxShadow: '3px 3px 5px 6px rgba(0, 0, 0, 0.2)',
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/guides" label="guides" icon={<LibraryBooksIcon />} />
      <BottomNavigationAction component={Link} to="/search" label="search" icon={<SearchIcon />} />
      <BottomNavigationAction component={Link} to="/top" label="top" icon={<BarChartIcon />} />

      { user ? <BottomNavigationAction component={Link} to="/profile" label="profile" icon={<PersonOutlineIcon />} />
        : <BottomNavigationAction component={Link} to="/signin" label="sign in" icon={<MeetingRoomIcon />} />}

    </BottomNavigation>
  );
}

