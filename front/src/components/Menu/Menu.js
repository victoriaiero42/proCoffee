import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import theImg from '../db/imgs/java.png';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    // backgroundColor: "#424242",
    backgroundColor: '#d7d0c3',
    // textColor: "black",#d2c19f   #e1dcd0
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log(theImg);
  return (
    <BottomNavigation
      style={{
        marginBottom: '0px',
        boxShadow: '3px 3px 5px 6px rgba(0, 0, 0, 0.2)',
      }}
      // value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/guides" label="guides" icon={<LibraryBooksIcon />} />
      <BottomNavigationAction component={Link} to="/search" label="search" icon={<SearchIcon />} />
      <BottomNavigationAction component={Link} to="/profile" label="profile" icon={<PersonOutlineIcon />} />

    </BottomNavigation>
  );
}

// function Menu() {

//   console.log(styles);
//   return (
//     <>
//       <span className={styles.links}>
//         <div className={styles.justify}>
//           <Link className={styles.links} to='guides'>guides</Link>
//           <Link className={styles.links} to='search'>search</Link>
//           <Link className={styles.links} to='profile'>profile</Link>
//         </div>
//       </span>
//     </>
//   )
// }

// export default Menu
