const express = require('express');
const selectServices = require('../../services/mongo/selectServices');
const { getSuccessStatus, getErrorStatus } = require('../../helper/statusFunction');

module.exports.select = async (req,res) => {
    var volume = req.params.volume;
    await selectServices.select(volume, async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        // const data = await formateCoinDetailData(result);
        return res.status(200).json({"insert": "done"});
    });
}

