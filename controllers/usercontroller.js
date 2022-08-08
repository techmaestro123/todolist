const User=require('../models/user');


module.exports.profile=function(req,res){

return res.render('user_profile');


}   

module.exports.signin=function(req,res){
  if(req.isAuthenticated()){
   return res.redirect('/user/profile');
  }
  
    return res.render('user_signin',{
     title: "sign In"
    }
  );
  
}

module.exports.signup=function(req,res){
  if(req.isAuthenticated()){
    return res.redirect('/user/profile');
  }
  

    return res.render('user_signup',{
     title: "sign Up"
    });
}

module.exports.create=function(req,res){
console.log(req.body);

User.findOne({email:req.body.email},function(err,user){
   if(err){console.log('error in creating user'); return; };

    if(!user){
      User.create(req.body,function(err,user){
        if(err){console.log('error in creating user',err); return ;};
        
        return res.redirect('/user/sign-in');
      });
    }
    else{
        return res.redirect('back');
    }
});


}

module.exports.createsession=function(req,res){
return res.redirect('/');
}


module.exports.destroysession=function(req,res){
    req.logout(()=>{
      console.log('logged out');
    });

    return res.redirect('/');
}