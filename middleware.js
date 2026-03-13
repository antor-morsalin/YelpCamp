const reviews = require('./controllers/reviews');
const Campground = require('./models/campground');
const Review = require('./models/review');

const loginCheck = (req, res, next) =>{
    if(!req.isAuthenticated())
    {
        req.session.returnTo = req.originalUrl; 
        req.flash('error', 'You must login first!');
        return res.redirect('/login');
    }
    next();
}

const storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}


const isAuthor = async (req, res, next) => {
    const {id} = req.params ;
    const camp = await Campground.findById(id);

    if (!camp) 
    {
        req.flash('error', 'Campground not found.');
        return res.redirect('/campgrounds');
    }

    if(!camp.author.equals(req.user?._id))
    {
        req.flash('error', 'You do not have permission to do that.');
        return res.redirect(`/campgrounds/${id}`);
    }
    
    next();
}


const isReviewer = async (req, res, next) => {
    const {id} = req.params ;
    const camp = await Campground.findById(id);
    if(!camp)
    {
        req.flash('error', 'Campground not found.');
        return res.redirect('/campgrounds');
    }
    if(camp.author.equals(req.user?._id))
    {
        req.flash('error', 'You do not have permission to do that.');
        return res.redirect(`/campgrounds/${id}`);
    }
    next();
}


const isReviewOwner = async (req, res, next) => {
    const {reviewId, id} = req.params;
    const review = await Review.findById(reviewId);
    if(!review)
    {
        req.flash('error', 'Review not found.');
        return res.redirect(`/campgrounds/${id}`);
    }
    if(!review.authorId.equals(req.user?._id))
    {
        req.flash('error', 'You do not have permission to do that.');
        return res.redirect(`/campgrounds/${id}`);
    }
    next();
}


module.exports = {loginCheck, storeReturnTo, isAuthor, isReviewer, isReviewOwner};