const express = require('express');
const updateServices = require('../../services/mysql/updateServices');
const { getSuccessStatus, getErrorStatus } = require('../../helper/statusFunction');

module.exports.update = async (req,res) => {
    var volume = req.params.volume;
    await updateServices.update(volume, async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        // const data = await formateCoinDetailData(result);
        return res.status(200).json({"insert": "done"});
    });
}

