const insertService = require('../../services/experimentData/insertDataServices');
const { getSuccessStatus, getErrorStatus } = require('../../helper/statusFunction');

module.exports.insertData = async (req,res) => {
    var data = {
        database : req.params.database,
        threads : req.params.threads,
        experiment : req.params.experiment
    }

    await insertService.insertData(data, async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json({"result": "done"});
    });
}
