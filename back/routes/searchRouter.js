import express from 'express';
import Coffee from '../models/coffee.js';

const router = express.Router();

router.post('/searchCoffee', async (req, res) => {
  const { text } = req.body;
  const newText = text.trim().split('');
  const newArray = [];
  const base = await Coffee.find();
  const newBase = base.map((el) => {
    newText.map((elem) => {
      for (let i = 0; i < newText.length; i++) {
        if (elem[i] == el.title[i]) {
          newArray.push(el);
        }
      }
    });
  });
  res.json({ newArray });
});

export default router;
