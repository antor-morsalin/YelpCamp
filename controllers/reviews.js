const Campground = require('../models/campground');
const Review = require('../models/review');
const ExpressError = require('../utils/ExpressErros');

module.exports = {
    postReview: async (req, res, next)=>{
     
        const review = new Review(req.cleanValue);
        review.authorId = req.user._id;
        await review.save();
        const camp = await Campground.findById(req.params.id);
        if(!camp)
        {
            throw new ExpressError("This camp does not exist", 404)
        }
        else
        {
            camp.reviews.push(review);
            await camp.save();      
        }
        res.redirect(`/campgrounds/${req.params.id}`);
    },
    deleteReview: async(req, res, next)=>{
        const {id, reviewId} = req.params;
        //. pull that data out
        const camp = await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}}, {new: true, runValidators: true });
        if(!camp)
        {
            throw new ExpressError('No camp contains this review', 999);
        }
        const review =  await Review.findByIdAndDelete(reviewId);
        if(!review)
        {
            throw new ExpressError('No camp contains this review', 999);
        }
        res.redirect(`/campgrounds/${id}`)
    }
}