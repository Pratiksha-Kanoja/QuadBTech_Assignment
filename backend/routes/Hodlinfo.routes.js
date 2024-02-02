import {Router} from 'express';
import { Adddata, Getdata} from '../controllers/Hodlinfo.controller.js';

const hodlinforouter = Router();

hodlinforouter.post('/add-data',Adddata)
hodlinforouter.get('/get-data',Getdata)

export default hodlinforouter;