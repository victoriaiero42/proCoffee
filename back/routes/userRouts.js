import express from 'express';
import Article from '../models/article.js';
import Coffee from '../models/coffee.js';
import User from '../models/userModel.js';

const router = express.Router();

router.get('/articles', async (req, res) => {
  const imgs = await Article.find();
  res.status(200).json(imgs);
});

router.get('/topApi', async (req, res) => {
  const top = await Coffee.find();
  const sorted = top.sort((a, b) => b.av - a.av);
  const spliced = sorted.splice(0, 10);
  // console.log(spliced);
  res.status(200).json(spliced);
});

router.post('/favoriteApi', async (req, res) => {
  const { id } = req.body;
  const userID = req.session.user._id;
  // // console.log(userID, id);
  const itemToAdd = await Coffee.findById(id);
  itemToAdd.userLiked.push(userID);
  // itemToAdd.like = !itemToAdd.like;
  // await itemToAdd.save();
  // console.log(itemToAdd);
  // const user = await User.findById(userID);
  // user.favorites.push(itemToAdd);
  // await user.save();

  res.status(200);
});

router.post('/raiting', async (req, res) => {
  const { id, rate } = req.body;
  const numrate = Number(rate);
  const userID = req.session.user._id;
  const item = await Coffee.findById(id);
  const newU = await User.findById(userID);
  newU.raited.push(item);
  item.raiting.push({ userID, numrate });
  // console.log(item);
  const av = item.raiting.reduce((a, c) => a + c.numrate, 0);
  const sr = av / item.raiting.length;
  item.av = sr.toFixed(1);
  await item.save();
  await newU.save();
  res.status(200).json(newU);
});

router.get('/user', async (req, res) => {
  const curUser = req.session.user;
  console.log(curUser, '/////////////////');
  const newU = await User.findById(curUser._id);
  // console.log(newU);
  res.json(newU);
});

router.post('/wishlistApi', async (req, res) => {
  const { id } = req.body;
  const curUser = req.session.user;
  const newU2 = await User.findById(curUser._id);
  const item = await Coffee.findById(id);
  newU2.wishlist.push(item);
  await newU2.save();
  res.status(200).json({ res: 'ok' });
});

export default router;
