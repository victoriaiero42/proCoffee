import express from 'express';
import Article from '../models/article.js';
import Coffee from '../models/coffee.js';

const router = express.Router();

router.get('/articles', async (req, res) => {
  const imgs = await Article.find();
  res.status(200).json(imgs);
});

router.get('/top', async (req, res) => {
  const top = await Coffee.find();
  res.status(200).json(top);
});

export default router;
