import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './cofe.module.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: ' block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50',

  },
  media: {
    height: 140,

  },
});

export default function Cofe() {
  const [cofe, setCofe] = useState([
    {
      id: 1, img: 'https://static3.depositphotos.com/1001651/137/i/450/depositphotos_1376093-stock-photo-cofee-cup.jpg', name: 'Arabica', description: 'asfasfasd sdfhsdjfj dsfhsjdfhjsdhfj',
    },
    {
      id: 2, img: 'https://static3.depositphotos.com/1001651/137/i/450/depositphotos_1376093-stock-photo-cofee-cup.jpg', name: 'Arabica', description: 'asfasfasd sdfhsdjfj dsfhsjdfhjsdhfj',
    },
    {
      id: 3, img: 'https://static3.depositphotos.com/1001651/137/i/450/depositphotos_1376093-stock-photo-cofee-cup.jpg', name: 'Arabica', description: 'asfasfasd sdfhsdjfj dsfhsjdfhjsdhfj',
    },
    {
      id: 4, img: 'https://static3.depositphotos.com/1001651/137/i/450/depositphotos_1376093-stock-photo-cofee-cup.jpg', name: 'Arabica', description: 'asfasfasd sdfhsdjfj dsfhsjdfhjsdhfj',
    },
    {
      id: 5, img: 'https://us.123rf.com/450wm/foodandmore/foodandmore1710/foodandmore171000104/88449682-cup-of-double-espresso-coffee-with-piece-of-cake-on-wooden-table.jpg?ver=6', name: 'Jack', description: '40tko',
    },
    {
      id: 6, img: 'https://us.123rf.com/450wm/foodandmore/foodandmore1710/foodandmore171000104/88449682-cup-of-double-espresso-coffee-with-piece-of-cake-on-wooden-table.jpg?ver=6', name: 'Jack', description: '40tko',
    },
    {
      id: 7, img: 'https://us.123rf.com/450wm/foodandmore/foodandmore1710/foodandmore171000104/88449682-cup-of-double-espresso-coffee-with-piece-of-cake-on-wooden-table.jpg?ver=6', name: 'Jack', description: '40tko',
    },
  ]);
  const classes = useStyles();

  return (
    <>
      {cofe && cofe.map((el, i) => (
        <div className={styles.margin}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia>
                <img className={styles.effect} src={el.img} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Название кофе:
                  {el.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {el.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Подробно
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </>
  );
}
