const express = require('express');
const updateServices = require('../../services/mongo/updateServices');
const { getSuccessStatus, getErrorStatus } = require('../../helper/statusFunction');

module.exports.update = async (req,res) => {
    await updateServices.update(async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json({"update": "done"});
    });
}

module.exports.update1 = async (req,res) => {
    await updateServices.update1(async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json({"update": "done"});
    });
}

module.exports.update2 = async (req,res) => {
    await updateServices.update2(async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json({"update": "done"});
    });
}
