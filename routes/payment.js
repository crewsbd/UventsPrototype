const router = require('express').Router();
const controller = require('../controllers/payment');

// Advanced CRUD
router.post('/search', controller.searchPayment); // Search
router.get('/paypal-success', controller.paypalSuccessRedirect);
router.get('/paypal-cancel', controller.paypalCancelRedirect);

// Basic CRUD
router.post('/', controller.createPayment);
router.get('/:id', controller.getPayment);
router.put('/:id', controller.updatePayment);
router.delete('/:id', controller.deletePayment);



module.exports = router;
