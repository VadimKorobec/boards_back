import { Schema, model } from 'mongoose';
import taskSchema from '../schemas/task';

const boardSchema = new Schema({
  title: String,
  toDo: [taskSchema],
  inProgress: [taskSchema],
  done: [taskSchema],
});

const Board = model('board', boardSchema);

export default Board;
