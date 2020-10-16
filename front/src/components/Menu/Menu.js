import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ToggleButton from '@material-ui/lab/ToggleButton';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "absolute",
    bottom: "0px",
    backgroundColor: "#424242",
    textColor: "black",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      style={{
        marginBottom: "0px",
        boxShadow: "3px 3px 5px 6px rgba(0, 0, 0, 0.2)",
      }}
      // value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {/* <ToggleButton component={Link} to={'/guides'} value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton> */}
      <BottomNavigationAction component={Link} to={'/guides'} label="guides" />
      <BottomNavigationAction component={Link} to={'/search'} label="search" />
      <BottomNavigationAction component={Link} to={'/profile'} label="profile" />

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
