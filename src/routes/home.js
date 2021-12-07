const { Router } = require('express');
const router = Router();

// controller
const homeController = require('../controllers/home');

// routes
router.get("/", homeController.render);

module.exports = router;