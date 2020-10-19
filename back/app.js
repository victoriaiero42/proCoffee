import express from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import './misc/env.js';
import './misc/db.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouts.js'

const app = express();
const FileStore = sessionFileStore(session);

app.set('session cookie name', 'sid');

app.use(express.static('public'));
app.use(express.json());
app.use(session({
  name: app.get('session cookie name'),
  secret: process.env.SESSION_SECRET,
  store: new FileStore({
    // Шифрование сессии
    secret: process.env.SESSION_SECRET,
  }),
  // Если true, сохраняет сессию, даже если она не поменялась
  resave: false,
  // Если false, куки появляются только при установке req.session
  saveUninitialized: false,
  cookie: {
    // В продакшне нужно "secure: true" для HTTPS
    secure: process.env.NODE_ENV === 'production',
  },
}));

app.use(authRouter);
app.use(userRouter)


const port = process.env.PORT ?? 3001;
app.listen(port, () => { console.log('Server started at http://localhost:%s/', port) });
