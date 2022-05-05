const express = require('express');
const router = express.Router();
const postController = require('../../controllers/postController');
const postValidator = require('../../controllers/validations/postValidator');
const { validate } = require('express-validation');
const auth = require('../../auth');

router.get('/', postController.index);
router.get('/:id', validate(postValidator.show), postController.show);
router.post('/', auth.required, validate(postValidator.create), postController.create);
router.put('/:id', auth.required, validate(postValidator.update), postController.update);
router.delete('/:id', auth.required, validate(postValidator.delete), postController.delete);

// Likes
router.get('/:id/likes', validate(postValidator.getAllLikes), postController.getAllLikes);
router.get('/:id/likes/:userId', validate(postValidator.getLikeByUser), postController.getLikeByUser);
router.post('/:id/likes', auth.required, validate(postValidator.createLike), postController.createLike);
router.delete('/:id/likes', auth.required, validate(postValidator.deleteLike), postController.deleteLike);

module.exports = router;