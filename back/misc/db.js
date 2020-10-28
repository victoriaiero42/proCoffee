import mongoose from 'mongoose';

export default mongoose.connect('mongodb+srv://Igor-Elbrus-2020:U07GV3S7ulIkP08q@cluster0.3d58x.mongodb.net/coCoffee?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
