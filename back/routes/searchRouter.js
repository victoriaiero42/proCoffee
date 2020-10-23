import express from 'express';
import Coffee from '../models/coffee.js';

const router = express.Router();

router.post('/searchCoffee', async (req, res) => {
  console.log('мы на бэке поиска кофе!');
  const { input } = req.body;
  console.log(input);
  const newText = input.toLowerCase();
  const newArray = [];
  const base = await Coffee.find();
  base.forEach((el) => {
    if (el.title.toLowerCase().includes(newText)) {
      newArray.push(el);
    }
  });
  console.log(newArray);
  res.json({ coffeeArr: newArray });
});

export default router;
