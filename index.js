import express from "express";
import cors from "cors";
import { connectUsingMongoose } from "./confiq/mongoose.js";
import userRouter from "./routes/UserRoutes.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

connectUsingMongoose();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
