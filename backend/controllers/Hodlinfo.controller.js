import axios from "axios";
import HodlinfoModel from "../models/Hodlinfo.model.js";

export const Adddata = (req, res) => {
    const apiUrl = 'https://api.wazirx.com/api/v2/tickers';

    axios.get(apiUrl).then(async (response) => {
        const newresponse = response.data;
        var i = 0;
        var dataToInsert = [];

        for (var element in newresponse) {
            if (i == 10) break;
            var tempObject = newresponse[element];
            // if (tempObject["base_unit"] != "btc") continue;
            var data = {
                "name": tempObject["name"],
                "last": tempObject["last"],
                "buy": tempObject["buy"],
                "sell": tempObject["sell"],
                "volume": tempObject["volume"],
                "base_unit": tempObject["base_unit"]
            };
            dataToInsert.push(data);
            i++;
        }

        // insert all the data into the database
        try {
            const result = await HodlinfoModel.insertMany(dataToInsert);
            return res.status(201).json({ success: true, message: "Products successfully added." });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    })
    .catch(error => {
        res.status(500).json({ success: false, message: error.message });
    });
}

export const Getdata = async(req,res) =>{
    try {
        const info = await HodlinfoModel.find().select("-__v");
        if(info.length){
            return res.status(200).json({success:true,message:"Info found",info:info})
        }
        return res.status(404).json({success:false,message:"Info not found"})

    } catch (error) {
        res.status(500).json({success:false,message:error})
    }
}

