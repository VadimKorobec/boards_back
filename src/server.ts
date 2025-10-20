import mongoose from 'mongoose';
import app from './app';

const DB_HOST =
  'mongodb+srv://Vadim:3sflctqdmSmgBtDP@cluster0.jdu7ybz.mongodb.net/boards_reader?retryWrites=true&w=majority&appName=Cluster0';

const PORT: number = 5000;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
