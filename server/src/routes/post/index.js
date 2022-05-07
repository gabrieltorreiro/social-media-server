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
router.get('/:id/like', auth.required, validate(postValidator.getLike), postController.getLike);
router.put('/:id/like', auth.required, validate(postValidator.setLikeStatus), postController.setLikeStatus);

// Comments
router.get('/:id/comments', validate(postValidator.getAllComments), postController.getAllComments);
router.post('/:id/comments', auth.required, validate(postValidator.createComment), postController.createComment);
router.put('/:id/comments', auth.required, validate(postValidator.updateComment), postController.updateComment);
router.delete('/:id/comments', auth.required, validate(postValidator.deleteComment), postController.deleteComment);

module.exports = router;