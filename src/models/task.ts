import { Schema } from 'mongoose';

const taskSchema = new Schema({
  title: String,
  description: String,
});

export default taskSchema;
