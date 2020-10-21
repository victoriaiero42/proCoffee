import express from 'express';
import Article from '../models/article.js';
import Coffee from '../models/coffee.js';
import User from '../models/userModel.js';

const router = express.Router();

router.get('/articles', async (req, res) => {
  const imgs = await Article.find();
  res.status(200).json(imgs);
});

router.get('/top', async (req, res) => {
  const top = await Coffee.find();
  res.status(200).json(top);
});

router.post('/favorite', async (req, res) => {
  const { id } = req.body;
  const userID = req.session.user._id;
  const itemToAdd = await Coffee.findById(id);
  const user = await User.findById(userID);
  user.favorites.push(itemToAdd);
  await user.save();
  res.status(200).json(id);
});

router.post('/raiting', async (req, res) => {
  const { id, numrate } = req.body;
  // console.log(raiting);
  const userID = req.session.user._id;
  const item = await Coffee.findById(id);
  // console.log(item);
  item.raiting.push({ userID, numrate });
  const av = item.raiting.reduce((a, c) => a + c.numrate, 0);
  // console.log(av);
  // console.log(av / item.raiting.length);
  const sr = av / item.raiting.length;
  item.av = sr.toFixed(1);
  // console.log(item);
  await item.save();
  console.log(item);
  res.status(200).json(item);
});

export default router;
