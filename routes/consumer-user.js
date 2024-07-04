const router = require('express').Router();
const controller = require('../controllers/consumer-user');

// Basic CRUD
router.post((request, response) => {});

router.get('/', controller.getConsumerUser);
router.put((request, response) => {});
router.delete((request, response) => {});

// Advanced CRUD
router.get('/search', (request, response) => {}); // Search

module.exports = router;
