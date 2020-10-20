import express from 'express';

const router = express.Router();

router.post('/restore', async (req, res) => {
  const { targetText } = req.body;
  

  res.json({ he: 'back' });
});

export default router;
