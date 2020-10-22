import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import Raiting from '../Rating/Rating';
import { startRewriteUser } from '../../redux/actions/authActions';
import { startCoffeeItemsSaga } from '../../redux/actions/allItemsActions';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px',
    backgroundColor: '#d7d0c3',

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  undone: {
    color: 'tomato',
  }
}));

export default function RecipeReviewCard({ id }) {
  // const [undone, setUndone] = useState(false);

  const dispatch = useDispatch();
  const { like } = useSelector((state) => state.top.top.find((x) => x._id === id))
  const {
    title, image, description, process, region, av, raiting,
  } = useSelector((state) => state.top.top.find((x) => x._id === id));
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = async () => {
    const response = await fetch('/favorite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });

    const resave = await fetch('/user');
    const res1 = await resave.json();
    console.log(res1);
    dispatch(startRewriteUser(res1));
    dispatch(startCoffeeItemsSaga())
  };

  const addToWishList = async () => {
    const response = await fetch('/wishlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });
    const resave = await fetch('/user');
    const res1 = await resave.json();
    console.log(res1);
    dispatch(startRewriteUser(res1));
    // const ggg = await response.json();
    // console.log(ggg);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`https://cocoffee.herokuapp.com/img/${image}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" component="p">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {av}
        </Typography>
        <Typography style={{ color: 'gray' }} variant="body2" component="p">
          Оценки:
          {' '}
          {raiting.length}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">

          <FavoriteIcon
            onClick={() => {
              handleClick();
              // setUndone((state) => !state);
              console.log('g');
            }}
            className={`${classes.done} ${like ? classes.undone : ""}`}
          />
        </IconButton>
        <IconButton>
          <FreeBreakfastIcon onClick={addToWishList} />
        </IconButton>
        {/* <IconButton > */}
        <Raiting id={id} />
        {/* </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Регион:
            {' '}
            {region}
          </Typography>
          <Typography paragraph>
            Обработка:
            {' '}
            {process}
          </Typography>
          <Typography paragraph>
            Описание:
            {' '}
            {description}
          </Typography>
        </CardContent>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </Collapse>
    </Card>
  );
}

