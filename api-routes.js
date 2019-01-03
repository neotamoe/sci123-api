let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API is working',
        message: 'welcome to sci123-api'
    });
});

module.exports = router;