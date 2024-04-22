const selectServices = require('../../services/mongo/selectServices');
const { getSuccessStatus, getErrorStatus } = require('../../helper/statusFunction');

module.exports.select = async (req,res) => {
    await selectServices.select(async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json(result);
    });
}

module.exports.select1 = async (req,res) => {
    await selectServices.select1(async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json(result);
    });
}


module.exports.select2 = async (req,res) => {
    await selectServices.select2(async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json(result);
    });
}

module.exports.select3 = async (req,res) => {
    await selectServices.select3(async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json(result);
    });
}

module.exports.select4 = async (req,res) => {
    await selectServices.select4(async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json(result);
    });
}

module.exports.select5 = async (req,res) => {
    await selectServices.select4(async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json(result);
    });
}