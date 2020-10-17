import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Privet')
})

router.post('/registration', async (req, res) => {
  const {
    userName,
    userEmail,
    userPassword,
  } = req.body.formData;
  let newUser;
  try {
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    newUser = new User({
      userName,
      userEmail,
      userPassword: hashedPassword,
    });
    await newUser.save();
    req.session.user = newUser;
  } catch (error) {
    return res.json({ err: 'Пользователь уже существует или данные не верны!', error });
  }
  return res.json({
    id: newUser._id,
    login: newUser.userName,
    email: newUser.userEmail,
    status: 'ok',
  });
});

router.post('/login', async (req, res) => {
  let findUser;
  const {
    userEmail,
    userPassword,
  } = req.body;
  try {
    findUser = await User.findOne({ userEmail });
    if (findUser && await bcrypt.compare(userPassword, findUser.userPassword)) {
      req.session.user = findUser;
    }
  } catch (error) {
    return res.json(error);
  }
  return res.json({
    id: findUser._id,
    login: findUser.userName,
    email: findUser.userEmail,
    status: 'ok',
  });
});

router.get('/logout', async (req, res) => {
  if (req.session.user) {
    await req.session.destroy();
    res.clearCookie('user_sid');
    return res.json('ok');
  }
  return res.json('ne ok');
});

export default router;
