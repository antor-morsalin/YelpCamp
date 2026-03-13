if(process.env.NODDE_ENV !== "production")
{
    require('dotenv').config();
}

const env = process.env ;
const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const wrapAsync = require('./utils/wrapAsynch')
const ExpressError = require('./utils/ExpressErros')
const passport = require('passport');
const passportLocal = require('passport-local')

//? method override helps masking the post request as put, delete request and so on
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Review = require('./models/review');
const User = require('./models/user');

//? ejsMate helps making partials like navbar, footer that is reusable in other files
const ejsMate = require('ejs-mate');

//? Library to do validation
const Joi = require("joi");

// Database Connection
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/YelpCamp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch(err => console.log(err)).then(()=>console.log('Database Connected'));

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

//? helps with the object received in post request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//? _method is used to define the post request into put or delete
app.use(methodOverride('_method'));

//? telling express that static files (styles, images, icons) are in the public folder
app.use(express.static(path.join(__dirname, 'public')))
app.engine('ejs', ejsMate);



const sessionConfig = {
    secret: 'aintnowaydawg',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true, // not accessible from client side so mroe security
        expires: Date.now() + (7*24*60*60*1000),
        maxAge: (7*24*60*60*1000)
        // Week in miliseconds 
    }
}

app.use(session(sessionConfig));
app.use(flash());
//? passport middleware has to be used after session middleware
app.use(passport.initialize());
app.use(passport.session());

//? passport will use local strategy to authenticate Users
passport.use(new passportLocal(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//? Flash middleware
app.use((req, res, next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');  
    res.locals.isAuthenticated = req.isAuthenticated?.() || false;
    res.locals.currentUser = req.user;
    next();
})


// Test 
app.get('/makecampground', async (req, res)=>{
    const camp = new Campground({
        title: 'botacical-garden',
        price: '50 taka per person',
        description: 'shundor jayga',
        location: 'mirpur'
    });
    await camp.save();
    res.send(camp);
}); 

app.get('/', (req, res)=>{
    res.render('home');
})

const userRouter = require('./routers/users');
app.use('/', userRouter);


const campgroundRouter = require('./routers/campgrounds');
app.use('/campgrounds', campgroundRouter);

 
const reviewRouter = require('./routers/reviews');
app.use('/campgrounds/:id/review', reviewRouter);


//? handling 404 route
app.all(/(.*)/, (req, res, next)=>{ 
    next(new ExpressError(`Page not found`), 404);
})


//? This middleware deals with all errors for now. This will always be at the end
app.use((err, req, res, next)=>{
    const {statusCode=500, message='Oops! Something went wrong.'} = err;
    res.status(statusCode).render('error', {statusCode, message});
})



const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`); 
});

