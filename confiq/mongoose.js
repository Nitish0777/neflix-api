import mongoose from "mongoose";

export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });

    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(err);
  }
};
