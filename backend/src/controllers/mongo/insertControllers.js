const express = require('express');
const insertServices = require('../../services/mongo/insertServices');
const { getSuccessStatus, getErrorStatus } = require('../../helper/statusFunction');

module.exports.insert = async (req,res) => {
    var volume = req.params.volume;
    await insertServices.insert(volume, async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        // const data = await formateCoinDetailData(result);
        return res.status(200).json({"insert": "done"});
    });
}

module.exports.insertFromCSV = async (req,res) => {
    var volume = req.params.volume;
    await insertServices.insertFromCSV(volume, async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        // const data = await formateCoinDetailData(result);
        return res.status(200).json({"insert": "done"});
    });
}


module.exports.insertNested = async (req,res) => {
    var volume = req.params.volume;
    await insertServices.insertNested(volume, async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        // const data = await formateCoinDetailData(result);
        return res.status(200).json({"insert": "done"});
    });
}
