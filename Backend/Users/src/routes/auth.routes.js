const { Router } = require("express");
const router = Router();
const {register, login,logout,profile,verifyToken,deposit, withdraw,transfer} = require("../controllers/auth.controllers.js");
const { authRequired } = require("../middlewares/validateToken.js");
const { validateSchema } = require("../middlewares/validator.middleware.js");
const {
  registerSchema,
  loginSchema,
  MoneySchema,
  transferSchema
} = require("../schemas/auth.schema.js");


router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.patch("/deposit", validateSchema(MoneySchema), deposit);
router.patch("/withdraw", validateSchema(MoneySchema), withdraw);
router.patch("/transfer", validateSchema(transferSchema),transfer);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequired, profile);

module.exports = router;
