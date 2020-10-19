import express from 'express';
const router = express.Router();
import Coffee from '../models/coffee.js';

router.post('/readText', async (req, res) => {
  const { text } = req.body;

  const splitText = text.replace(/[^a-zA-ZА-Яа-я0-9\s]/ig, '\n');
  const newText = splitText.split('\n');
  let newArray = [];
  const base = await Coffee.find()
  const newBase = base.map((el) => {
    newText.map((elem) => {
      if (elem.includes(el.uniq)) {
        newArray.push(el);
      }
    })
  })

  res.json({ newArray })
})

export default router;
