const express = require('express');
const insertServices = require('../../services/mysql/insertServices');
const { getSuccessStatus, getErrorStatus } = require('../../helper/statusFunction');
// const { formateInsertData } = require('../../helper/mysql/formateInsertData');

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


module.exports.insertCityTable = async (req,res) => {
    var volume = req.params.volume;
    await insertServices.insertCityTable(volume, async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        // const data = await formateCoinDetailData(result);
        return res.status(200).json({"insert": "done"});
    });
}

module.exports.insertTemperatureTable = async (req,res) => {
    var volume = req.params.volume;
    await insertServices.insertTemperatureTable(volume, async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        // const data = await formateCoinDetailData(result);
        return res.status(200).json({"insert": "done"});
    });
}

