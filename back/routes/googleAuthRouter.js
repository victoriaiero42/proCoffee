import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://xn--80askzj.com.ua/' }),
  (req, res) => {
    if (req.user) {
      req.session.user = req.user;
      res.locals.user = req.user;
      console.log(req.session.user, 'гугль кольбэк!');
    }
    res.redirect('/read');
  });

router.get('/api/goodGoogle', (req, res) => {
  console.log(req.session.user, 'апи гугл, бэк');
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  res.json({
    id: req.session.user._id,
    login: req.session.user.username,
    email: req.session.user.email,
    status: 'ok',
    favorites: req.session.user.favorites,
    raited: req.session.user.raited,
    wishlist: req.session.user.wishlist,
  });
});

export default router;
