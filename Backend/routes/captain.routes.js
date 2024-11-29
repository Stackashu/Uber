const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const middlewares = require("../middlewares/auth.middlewares");

router.post("/register", [
  body("email").isEmail().withMessage("Invalid Email"),
  body("fullname.firstname").isLength({ min: 3 }).withMessage("Firstname  must be atleast 3 characters long"),
  body("password").isLength({ min: 6}).withMessage("password must be atleast 6 characters long"),
  body("vehicle.color").isLength({ min: 3 }).withMessage("color  must be atleast 3 characters long"),
  body("vehicle.plate").isLength({ min: 3}).withMessage(" plate must be atleast 3 characters longs"),
  body("vehicle.capacity").isInt({min:1}).withMessage("Capacity must be  at least 1"),
  body("vehicle.vehicleType").isIn(["car","motorcycle","auto"]).withMessage("Invalid VehicleType")
],captainController.registerCaptain);

router.post("/login",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({ min: 6}).withMessage("Incorrect passowrd")
],captainController.loginCaptain)

router.get("/profile",middlewares.authCaptain,captainController.getCaptainProfile)
router.get("/logout",middlewares.authCaptain,captainController.logoutCaptain)
module.exports = router;

