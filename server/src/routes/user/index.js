const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const userValidator = require("../../controllers/validations/userValidator");
const { validate } = require("express-validation");
const auth = require("../../auth");

router.get("/", userController.index);
router.get("/:id", validate(userValidator.show), userController.show);
router.post("/", validate(userValidator.create), userController.create);
router.post("/login", validate(userValidator.login), userController.login);
router.post("/verify", validate(userValidator.verify), userController.verify);
router.put("/", auth.required, validate(userValidator.update), userController.update);
router.delete("/", auth.required, userController.delete);

module.exports = router;
