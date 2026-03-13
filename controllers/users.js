const User = require('../models/user');


module.exports = {
    registrationForm: (req, res)=>{
        res.render('users/register');
    },
    registerUser: async(req, res, next)=>{
        const {username, email, password} = req.body;
        const user = new User({username, email});
        try {
        const registeredUser =  await User.register(user, password);
        req.login(registeredUser, (err)=>{
            if(err)
            {
                return next(err);
            }
            req.flash('success', 'Welcome to YelpCamp');
            res.redirect('/campgrounds');
        })
        }
        catch(e){
        req.flash('error', e.message || 'Something went wrong, please try again');
        return res.redirect('/register');
    }
   
    },
    loginForm: (req, res)=>{
        res.render('users/login');
    },
    loginUser: (req, res)=>{
        req.flash('success', 'Welcome back!!!');
        const redirectUrl = res.locals.returnTo || '/campgrounds'; 
        res.redirect(redirectUrl);
    },
    logoutUser: (req, res, next)=>{
        req.logOut(function (e){
            if(e)
            {
                return next(e);
            }
            req.flash('success', 'Login again to continue your journey on YelpCamp');
            res.redirect('/login');
        })
    }
}