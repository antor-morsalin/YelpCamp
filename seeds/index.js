const mongoose = require('mongoose');
// Database Connection
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/YelpCamp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch(err => console.log(err)).then(()=>console.log('Database Connected'));


//? getting the model of the schema from models folder
const Campground = require('../models/campground');


//? this is the fake camp data
const fakeCampgrounds = require('./seed');


//? function that deletes all previous data and adds new data
async function seedDb(data) {
    await Campground.deleteMany({});
    Campground.insertMany(data);
};


//? ofcourse, async functions returns a promice ig
seedDb(fakeCampgrounds)
    .then(()=>{
        console.log('Data inserted successfully');
    })
