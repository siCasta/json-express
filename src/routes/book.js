const { Router } = require('express');
const router = Router();

// controller
const bookController = require('../controllers/book');

// routes
router.get('/:id', bookController.getBook);
router.get("/delete/:id", bookController.delete);
router.get("/edit/:id", bookController.edit);
router.post("/update/:id", bookController.update);

module.exports = router;