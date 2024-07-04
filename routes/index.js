const router = require('express').Router();

const consumerUserRouter = require('./consumer-user');
router.use('/consumer-user', consumerUserRouter);

module.exports = router;
