const express = require("express");
const router = express.Router();
const { check} = require("express-validator");
const { Signup, Login, verifyAccount, deleteAllUser, refreshToken, getMe } = require("../controllers/users");
const { AdminSignup } = require("../controllers/adminUser");
const auth = require("../middleware/auth");

const registerValMiddleware=[
  check("fullname", "Enter fullname").not().isEmpty(),
    check("email", "Enter email").not().isEmpty().isEmail(),
    check("password", "Enter password").not().isEmpty().isLength({ min: 5 }),
    check("confirmpassword", "Enter confirmPassword").not().isEmpty(),
]

router.post("/verifyAccount",verifyAccount);
router.post("/login",Login)
router.get('/me', auth,getMe)
router.post(
  "/register",
  [
  ...registerValMiddleware
  ],
  Signup
);
router.delete("/deleteusers",deleteAllUser)
router.post("/refresh-token",refreshToken)
router.post("/user/register",AdminSignup)

module.exports = router;
