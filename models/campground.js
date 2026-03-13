const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');

const CampgroundSchema = Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: String,
    filename: String,
    price: Number,
    description: String,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
});

//? doc is the item which was deleted
CampgroundSchema.post('findOneAndDelete', async function(doc){
    if(doc) {
        await Review.deleteMany({_id: {$in: doc.reviews}});
        //. to delete all the reviews from the review collection the belonged to the deleted camp
    }
})

CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
    return `
    <strong><a href="/campgrounds/${this._id}">${this.title}</a></strong>
    <p>${this.description.substring(0, 20)}...</p>`
});

const Campground = mongoose.model('Campground', CampgroundSchema);

module.exports = Campground;