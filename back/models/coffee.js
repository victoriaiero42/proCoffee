import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  tags: {
    type: String,
    require: true,
  },
  region: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  acidity: {
    type: String,
    require: true,
  },
  
});

export default mongoose.model('Coffee', coffeeSchema);
