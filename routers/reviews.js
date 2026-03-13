const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsynch')
const ExpressError = require('../utils/ExpressErros')

const Campground = require('../models/campground');
const Review = require('../models/review');

const controller = require('../controllers/reviews');
const {isReviewer, isReviewOwner} = require('../middleware');

//? Library to do validation
const Joi = require("joi");

const reviewValidation = Joi.object({
    author: Joi.string(),
    rating: Joi.number().min(0).max(5).required(),
    body: Joi.string().required().min(4)
});

const reviewValidationMiddleware = (req, res, next)=>{
    const {error, value} = reviewValidation.validate(req.body, { stripUnknown: true });
    if(error)
    {
        const message = error.details.map(e => e.message).join(', ');
        throw new ExpressError(message , 400);
    }
    else
    {
        req.cleanValue = value;
        req.cleanValue.author = req.user.username ;
        next();
    }
}


//__ Routes for review

//? post route to post a review
router.post('/', wrapAsync(isReviewer),  reviewValidationMiddleware, wrapAsync(controller.postReview));

//? delete route to delete a review
router.delete('/:reviewId', wrapAsync(isReviewOwner),  wrapAsync(controller.deleteReview))

module.exports = router;