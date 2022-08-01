const User=require('../models/user');


module.exports.profile=function(req,res){
if(req.cookies.user_id){
  User.findById(req.cookies.user_id,function(err,user){
    if(user){
    
      return  res.render('user_profile',{
        title:"user profile",
        user: user
      })
    }
    else{
      return res.redirect('/user/sign-in');
    }

  });
}
else{
  return res.redirect('/user/sign-in');
}





}   

module.exports.signin=function(req,res){
    return res.render('user_signin',{
     title: "sign In"
    });
}

module.exports.signup=function(req,res){
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

    User.findOne({email:req.body.email},function(err,user){
        
        if(user){
            if(user.password !=req.body.password){
                return res.redirect('back');
            }
            res.cookie("user_id",user.id);
            return res.redirect('/user/profile');
        }
      else{
        return res.redirect('back');
      }



    });
}


