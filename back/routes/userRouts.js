import express from 'express';
import Article from '../models/article.js';

const router = express.Router();

router.get('/articles', async (req, res) => {
  const imgs = await Article.find();
  res.status(200).json(imgs);
});

export default router;
