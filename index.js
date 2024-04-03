import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { PORT,MONGO_URL } from './config.js';
import { UserModel } from './models/users.model.js';
import { userRouter } from './routes/user.routes.js'

const app = express();
app.use(express.json());



app.use(cors())


app.use('/api/auth',userRouter)





mongoose.connect(MONGO_URL)
  .then(() => {
    console.log(`Database connected to MongoDB`);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(error => console.log(error));

