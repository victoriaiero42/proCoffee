import mongoose from 'mongoose';

export default mongoose.connect('mongodb://localhost:27017/coffeBeans', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
