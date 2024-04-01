const express = require('express');
const deleteServices = require('../../services/mysql/deleteServices');
const { getSuccessStatus, getErrorStatus } = require('../../helper/statusFunction');

module.exports.delete = async (req,res) => {
    var volume = req.params.volume;
    await deleteServices.delete(volume, async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        // const data = await formateCoinDetailData(result);
        return res.status(200).json({"insert": "done"});
    });
}

