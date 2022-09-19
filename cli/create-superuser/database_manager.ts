import mongoose from "mongoose";

const connectDb = (url: string) => {
  return mongoose.connect(url);
};

const closeConnection = () => {
  return mongoose.connection.close();
};

export default { connectDb, closeConnection };
