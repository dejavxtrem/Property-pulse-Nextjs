import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if (connected) {
    console.log('Mongodb is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGOBD_URL);
    connected = true;
    console.log('Mongodb is connected');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
