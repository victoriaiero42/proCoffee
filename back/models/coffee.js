import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  tags: {
    type: String,
  },
  region: {
    type: String,
    require: true,
  },
  process: {
    type: String,
  },
  type: {
    type: String,
    require: true,
  },
  acidity: {
    type: String,
  },
  image: {
    type: String,
  },
  uniq: {
    type: String,
  }
});

export default mongoose.model('Coffee', coffeeSchema);
