const router = require('express').Router();
const controller = require('../controllers/consumer-user');

// Advanced CRUD
router.post('/search', controller.searchConsumerUser); // Search

// Basic CRUD
router.post('/', controller.createConsumerUser);
router.get('/:id', controller.getConsumerUser);
router.put('/:id', controller.updateConsumerUser);
router.delete('/:id', controller.deleteConsumerUser);



module.exports = router;
