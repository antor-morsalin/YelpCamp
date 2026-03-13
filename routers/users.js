const express = require('express')
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsynch');
const ExpressError = require('../utils/ExpressErros');     
const {storeReturnTo} = require('../middleware');

const controller = require('../controllers/users');

const Joi = require('joi');
const passport = require('passport');

const registerValidation = Joi.object({
  username: Joi.string()
    .trim()
    .pattern(/^[A-Za-z0-9._]{3,20}$/)
    .required()
    .messages({
      'string.empty': 'Username is required',
      'any.required': 'Username is required',
      'string.pattern.base': 'Username can use letters, numbers, dots, and underscores (3–20 chars).',
    }),

  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'any.required': 'Email is required',
      'string.email': 'Please enter a valid email address',
    }),

  password: Joi.string()
    .min(8)
    // allow symbols but still require ≥1 letter and ≥1 digit
    .pattern(/^(?=.*[A-Za-z])(?=.*\d).{8,128}$/)
    .required()
    .messages({
      'string.empty': 'Password is required',
      'any.required': 'Password is required',
      'string.min': 'Password must be at least 8 characters',
      'string.pattern.base': 'Password must contain at least one letter and one number',
    }),
});

const registerValidationMiddleware = (req, res, next) => {
  const { error, value } = registerValidation.validate(req.body, {
    stripUnknown: true,
    abortEarly: false,
  });

  if (error) {
    const message = error.details.map(e => e.message).join(', ');
    throw new ExpressError(message, 400);
  }
  req.body = value;          
  next();
};


router.route('/register')
    .get(controller.registrationForm)
    .post(registerValidationMiddleware, wrapAsync(controller.registerUser));

router.route('/login')
    .get(controller.loginForm)
    .post(storeReturnTo, passport.authenticate('local', {failureFlash:true, failureRedirect:'/login', failureMessage:"Invalid username or password"}), controller.loginUser);

router.get('/logout', controller.logoutUser);


module.exports = router;