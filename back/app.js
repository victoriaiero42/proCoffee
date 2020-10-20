/* eslint-disable no-underscore-dangle */
import express from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import passport from 'passport';

import './misc/env.js';
import './misc/db.js';
import './passportJs/passport-setup.js';

import authRouter from './routes/authRouter.js';
import readTextRouter from './routes/readRouter.js';
import userRouter from './routes/userRouts.js'
import searchRouter from './routes/searchRouter.js';
import restoreRouter from './routes/restoreRouter.js';

const app = express();
const FileStore = sessionFileStore(session);

app.set('session cookie name', 'sid');

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));
app.use(express.json());

app.use(session({
  name: app.get('session cookie name'),
  secret: process.env.SESSION_SECRET,
  store: new FileStore({
    secret: process.env.SESSION_SECRET,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
  },
}));

app.use(authRouter);
app.use(readTextRouter);
app.use(searchRouter);
app.use(userRouter);
app.use(restoreRouter);

app.use((req, res, next) => {
  // console.log(req.session, '+++++++++++++++++++');
  next();
});

app.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/failedGoogle', (req, res) => {
  res.json({ massege: 'You are failed to login with google.' });
});

app.get('/goodGoogle', (req, res) => {
  res.json({
    id: req.session.user._id,
    login: req.session.user.username,
    email: req.session.user.email,
    status: 'ok',
  });
});

app.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/failedGoogle' }),
  (req, res) => {
    if (req.user) {
      req.session.user = req.user;
    }
    console.log('гугл колбэк')
    res.redirect('http://localhost:3000/');
  });

app.get('/googleLogout', async (req, res) => {
  if (req.session.user) {
    await req.session.destroy();
    req.logout();
    res.clearCookie('user_sid');
    return res.json('разлогинился ok');
  }
  return res.json('разлогинился ne ok');
});

app.use(authRouter);

const port = process.env.PORT ?? 3001;

app.listen(port, () => { console.log('Server started at http://localhost:%s/', port); });
