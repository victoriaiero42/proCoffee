import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  // Имя пользователя
  userName: {
    type: String,
    // required: true,
    // unique: true,
    // minlength: 4,
    // match: /[A-Za-z]\w+/,
  },
  // Мы не храним пароль, а только его хэш
  userPassword: {
    type: String,
    // required: true,
    // minlength: 8,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    // match: /[A-Za-z]\w+/,
  },
});

export default mongoose.model('User', UserSchema);
