// Import contact model
Question = require('./questionModel');

// Handle index actions
exports.index = function (req, res) {
    Question.aggregate([{$sample:{size:1}}], function(err, data){
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Question retrieved successfully",
            data: data
        });
    });
};