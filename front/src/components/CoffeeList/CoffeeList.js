import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { startCoffeeItemsSaga } from '../../redux/actions/allItemsActions';
import Item from '../Item/Item'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  inline: {
    display: 'inline',
  },
}));



// export default function AlignItemsList() {
//   const classes = useStyles();

//   return (
//     <List className={classes.root}>
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Brunch this weekend?"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 Ali Connors
//               </Typography>
//               {" — I'll be in your neighborhood doing errands this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//     </List>
//   );
// }


function CoffeeList() {
  const dispatch = useDispatch();

  const top = useSelector((state) => state.top.top)
  // console.log(top);
  useEffect(() => {


    dispatch(startCoffeeItemsSaga())
  }, [dispatch])

  return (
    <>

      {top ? top.map((el) => {
        return <Item key={el._id} id={el._id} />
        // return <Link key={el._id} to={`/item/${el._id}`}>
        //   <Item key={el.id} id={el._id} />
        // </Link>
      }) : null}
    </>

  )
}

export default CoffeeList
