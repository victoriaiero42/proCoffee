import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import regPhoto from "./reg.png"
import CenteredGrid from '../ArticleTitle/ArticleTitles'

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    backgroundColor: "#424242",
    margin: "10px"

  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  console.log(regPhoto);
  return (
    <>
      <CenteredGrid />
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={regPhoto}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Regions
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    </>
  );
}

