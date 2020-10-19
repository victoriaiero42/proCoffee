import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  // Имя пользователя
  username: {
    type: String,
    // required: true,
    // unique: true,
    // minlength: 4,
    // match: /[A-Za-z]\w+/,
  },
  // Мы не храним пароль, а только его хэш
  password: {
    type: String,
    // required: true,
    // minlength: 8,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // match: /[A-Za-z]\w+/,
  },
  googleId: {
    type: Number,
    // unique: true,
  },
});

UserSchema.statics.findOrCreate = function findOrCreate(condition, callback) {
  const user = this;
  user.findOne(condition, (err, result) => (
    result
      ? callback(err, result)
      : user.create(condition, (err, result) => callback(err, result))));
};

export default mongoose.model('User', UserSchema);