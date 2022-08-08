const passport=require('passport');

const LocalStrategy= require('passport-local').Strategy;
const User=require('../models/user');

passport.use(new LocalStrategy(
    {usernameField:'email'},
    function(email,password,done){
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('error in finding email');
                return done(err);
            }
            if(!user || user.password != password){
                console.log('invalid password/email');
                return done(null,false);
            }

return done(null,user);
        });
    })

);

passport.serializeUser(function(user,done){
   return done(null,user.id);
});


passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
   if(err){
    console.log('error is there');
    return done(err);
   }

   return done(null,user);
    });
})

passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
      return  next();
    }
    return res.redirect('/user/sign-in');
}

passport.setAuthenticateduser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
return next();

}

module.exports=passport;