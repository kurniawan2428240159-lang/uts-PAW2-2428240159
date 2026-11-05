const express = require('express');
const router = express.Router();
const merekponselController = require('../controllers/merekponselControllers');

router.get('/', merekponselController.getAll);
router.post('/', merekponselController.create);

module.exports = router;