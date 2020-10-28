import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.session.user);
  res.send('123');
});

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://xn--80askzj.com.ua/' }),
  (req, res) => {
    if (req.user) {
      req.session.user = req.user;
      // console.log(req.session.user);
    }
    res.redirect('/privetIzGoogla');
  });

export default router;
