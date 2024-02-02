import router from "./routes/index.js";
import express,{json} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());


app.use('/api/v1',router)
mongoose.connect(process.env.MONGOURL).then(()=>console.log('Dtabase connected'))

app.listen(8000,()=>console.log('App is running on Port 8000'));