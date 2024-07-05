const router = require('express').Router();
const controller = require('../controllers/consumer-user');

// Basic CRUD
router.post('/', controller.createConsumerUser);
router.get('/', controller.getConsumerUser);
router.put('/', controller.updateConsumerUser);
router.delete('/', controller.deleteConsumerUser);

// Advanced CRUD
router.get('/search', controller.searchConsumerUser); // Search

module.exports = router;
