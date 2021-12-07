const { Router } = require('express');
const router = Router();

// controller
const newEntryController = require('../controllers/newEntry');

// routes
router.get("/", newEntryController.render);
router.post("/", newEntryController.create);

module.exports = router;