const { Router } = require("express");
const router = Router();
const {register, login,logout,profile,verifyToken} = require("../controllers/auth.controllers.js");
const {deposit, withdraw,transfer,/*getMovements*/}= require("../controllers/money.controller.js")
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
router.patch("/deposit",/*authRequired,*/ validateSchema(MoneySchema), deposit);
router.patch("/withdraw", /*authRequired,*/ validateSchema(MoneySchema), withdraw);
router.patch("/transfer",/*authRequired,*/ validateSchema(transferSchema),transfer);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequired, profile);
/*router.get("/movement",/*authRequired,*/ /*getMovements);*/

module.exports = router;
