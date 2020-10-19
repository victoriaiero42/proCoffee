import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import CenteredGrid from '../ArticleTitle/ArticleTitles';
import { useParams } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#d7d0c3',
    margin: '10px',

  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const { id } = useParams();
  const articles = useSelector((state) => state.articles.articles);
  const actualArticle = articles.find((a) => a._id === id);
  console.log(actualArticle);
  const { title, preview, img, body } = useSelector((state) => {
    return state.articles.articles.find((x) => x._id === id);
  });

  const classes = useStyles();
  return (
    <>
      <CenteredGrid />
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`http://localhost:3001/images/${img}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Typography dangerouslySetInnerHTML={{ __html: body }} variant="body2" color="textSecondary" component="p">
              {/* {body} */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </Card>
    </>
  );
}
