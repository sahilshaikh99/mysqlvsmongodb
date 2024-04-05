const express = require('express');
const deleteServices = require('../../services/mysql/deleteServices');
const { getSuccessStatus, getErrorStatus } = require('../../helper/statusFunction');

module.exports.delete = async (req,res) => {
    await deleteServices.delete(async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json({"delete": "done"});
    });
}

module.exports.delete1 = async (req,res) => {
    await deleteServices.delete1(async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json({"delete": "done"});
    });
}

module.exports.delete2 = async (req,res) => {
    await deleteServices.delete2(async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json({"delete": "done"});
    });
}