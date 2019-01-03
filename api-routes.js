let router = require('express').Router();

router.get('/', function (req, res) {
        res.json({
            status: 'API is working',
            message: 'welcome to sci123-api',
        });
});

var questionController = require('./questionController');

router.route('/questions')
    .get(questionController.index)

module.exports = router;