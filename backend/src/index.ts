import express from 'express';
import router from './app';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});