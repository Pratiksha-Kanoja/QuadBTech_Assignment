import mongoose, { Schema } from "mongoose";

const info = new Schema({
    name:String,
    last:String,
    buy:String,
    sell:String,
    volume:String,
    base_unit:String
})

export default mongoose.model("Info",info);