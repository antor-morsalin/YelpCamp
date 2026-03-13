const mongoose = require('mongoose');
const {Schema} = mongoose

const reviewSchema = new Schema({
    author: String,
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    body: String,
    rating: Number
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;