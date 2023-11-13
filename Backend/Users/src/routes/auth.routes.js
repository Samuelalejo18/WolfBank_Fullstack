const { Router } = require("express");
const router = Router();
const {
  register,
  login,
  logout,
  profile,
  verifyToken,
  deposit,
  withdraw,
} = require("../controllers/auth.controllers.js");
const { authRequired } = require("../middlewares/validateToken.js");
const { validateSchema } = require("../middlewares/validator.middleware.js");
const {
  registerSchema,
  loginSchema,
  depositSchema,
  withdrawSchema,
} = require("../schemas/auth.schema.js");


router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.patch("/deposit", validateSchema(depositSchema), deposit);
router.patch("/withdraw", validateSchema(withdrawSchema), withdraw);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequired, profile);

module.exports = router;
