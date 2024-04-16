const selectService = require('../../services/experimentData/selectDataServices');
const { getSuccessStatus, getErrorStatus } = require('../../helper/statusFunction');

module.exports.selectData = async (req,res) => {
    var data = {
        database : req.params.database,
        threads : req.params.threads,
        experiment : req.params.experiment
    }

    await selectService.selectData(data, async(err, result) => {
        if(err){
            return res.status(500).json({
                "status": getErrorStatus()
            });
        };
        return res.status(200).json({"result": "done"});
    });
}
