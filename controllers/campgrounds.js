const Campground = require('../models/campground');
const ExpressError = require('../utils/ExpressErros');
const {cloudinary} = require('../cloudinary');

const maptilerClient = require("@maptiler/client");
const User = require('../models/user');
maptilerClient.config.apiKey = process.env.MAPTILER_API_KEY;

module.exports = {
    index: async (req, res, next)=>{
        const campgrounds = await Campground.find({});
        res.render('campgrounds/index', {campgrounds});
    },
    newCampForm: (req, res, next)=>{
        res.render('campgrounds/new');
    },
    saveNewCamp: async (req, res, next)=>{
    
        const camp = new Campground(req.cleanValue);
        camp.author = req.user._id;

        await camp.save();
        req.flash('success', 'Successfully created a new campground');
        
        res.redirect(`/campgrounds/${camp['_id']}`);

    },
    editCampForm: async (req, res, next)=>{
        const camp = await Campground.findById(req.params['id']);
        if(!camp)
        {
            throw new ExpressError("The camp you want to edit does not exist", 404);
        }
        else 
        {
            res.render('campgrounds/edit', {camp});
        }
    
    },
    updateCamp: async (req, res, next)=>{

        const camp = await Campground.findByIdAndUpdate(req.params['id'], req.cleanValue, {new: true, runValidators: true });

        if(!camp)
        {
            throw new ExpressError("The camp you want to update does notexist", 404);
        }
        else 
        {
            res.redirect(`/campgrounds/${req.params['id']}`);
        }
    
    },
    deleteCamp: async (req, res, next)=>{
        const camp = await Campground.findByIdAndDelete(req.params['id']);
        //console.log(camp);

        const publicId = camp['filename'];
        
        //console.log(publicId);
        if(publicId)
        {
            await cloudinary.uploader.destroy(publicId);
        }
        
        if(!camp)
        {
            throw new ExpressError('Camp you are trying to delete does not exist', 404);
        }
        res.redirect('/campgrounds');
    },
    viewCamp: async (req, res, next)=>{
        const {id} = req.params;
        const camp = await Campground.findById(id).populate('reviews').populate('author');
        
        if(!camp)
        {
            throw new ExpressError("This camp does not exist", 404)
        }
        else
        {
            res.render('campgrounds/show', {camp});
        }

    }
}