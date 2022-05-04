const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.post('/login', userController.login);
router.put('/', auth.required, userController.update);
router.delete('/', userController.delete);

module.exports = router;