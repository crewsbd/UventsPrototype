const router = require('express').Router();

const consumerUserRouter = require('./consumer-user');
const paymentRouter = require('./payment');


router.use('/consumer-user', consumerUserRouter);
router.use('/payment', paymentRouter);

module.exports = router;
