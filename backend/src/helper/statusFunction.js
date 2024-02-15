module.exports.getSuccessStatus = () => {
    return {
        timestamp: new Date(),
        error_code: "0",
        success: '1',
        message:"SUCCESS",
    }
}

module.exports.getErrorStatus = () => {
    return {
            success: '0',
            error_code: "1",
            error_message: 'Something went wrong!'
        }
}

