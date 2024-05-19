const express = require("express");
const router = express.Router();
const { check} = require("express-validator");
const { Signup, Login, verifyAccount } = require("../controllers/user");


router.post("/verifyAccount",verifyAccount);
router.post("/login",
[
  check("email", "Enter email").not().isEmpty(),
  check("password", "Enter password").not().isEmpty().isLength({ min: 5 }),
]
,Login)

router.post(
  "/register",
  [
    check("fullname", "Enter fullname").not().isEmpty(),
    check("email", "Enter email").not().isEmpty().isEmail(),
    check("password", "Enter password").not().isEmpty().isLength({ min: 5 }),
    check("confirmpassword", "Enter confirmPassword").not().isEmpty(),
  ],
  Signup
);

module.exports = router;