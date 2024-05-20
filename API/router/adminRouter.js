const express = require("express");
const router = express.Router();
const { check} = require("express-validator");
const { Signup, Login, verifyAccount, editProduct, GetEditProduct, newArrivals } = require("../controllers/admin");
const auth = require("../middleware/auth");


const validationMiddlewares = [
  check('name', 'Enter fullname').not().isEmpty(),
  check('email', 'Enter email').not().isEmpty().isEmail(),
  check('password', 'Enter password').not().isEmpty().isLength({ min: 5 }),
  check('confirmpassword', 'Enter confirmPassword').not().isEmpty(),
];

const loginValMiddleware=[
  check("email", "Enter email").not().isEmpty(),
  check("password", "Enter password").not().isEmpty().isLength({ min: 5 }),
]

router.post("/verifyAccount",verifyAccount);
router.get("/edit/:id",GetEditProduct);
router.post("/edit/:id",editProduct);
router.get('/new-arrivals',newArrivals)
router.post("/login",
[
 ...loginValMiddleware
]
,Login)

router.post(
  "/register",
  [
  ...validationMiddlewares,auth
  ],
  Signup
);

module.exports = router;
