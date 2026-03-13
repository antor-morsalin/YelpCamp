const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsynch')
const ExpressError = require('../utils/ExpressErros')

const Campground = require('../models/campground');

const {loginCheck, isAuthor} = require('../middleware');

const controller = require('../controllers/campgrounds');

//? Library to do validation
const Joi = require("joi");

const multer  = require('multer')
const storage = require('../cloudinary');
const upload = multer(storage);



const validation = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  //image: Joi.string().uri().required(),
  price: Joi.number().min(0).required(),
  description: Joi.string().min(10).max(500).required(),
  location: Joi.string().min(3).max(200).required()
});

//? Validation middleware made with JOI library
const validateMiddleware = (req, res, next)=>{
    const { error, value } = validation.validate(req.body, { stripUnknown: true });    
    if(error)
    {
        const message = error.details.map(e => e.message).join(', ');
        throw new ExpressError(message , 400);
    }
    else
    {
        req.cleanValue = value;
        if(req.file)
        {
            req.cleanValue.image = req.file.path ;
            req.cleanValue.filename = req.file.filename ;
        }
        
        next();
    }
}


router.route('/')
    .get(loginCheck, wrapAsync(controller.index))  //? get all campgrounds
    .post(loginCheck, upload.single('image'), validateMiddleware, wrapAsync(controller.saveNewCamp));  //? Post route to post a new campground
        

//? Form to create a new campground
router.get('/new', loginCheck, controller.newCampForm);

//? Form to edit a camp
router.get('/:id/edit', wrapAsync(isAuthor), loginCheck, wrapAsync(controller.editCampForm));

router.route('/:id')
    .get(loginCheck, wrapAsync(controller.viewCamp))  //? Show one campground
    .put(loginCheck, wrapAsync(isAuthor), validateMiddleware, wrapAsync(controller.updateCamp))  //? route to update a campground information
    .delete(loginCheck, wrapAsync(isAuthor), wrapAsync(controller.deleteCamp));  //? route to delete a campground


module.exports = router;