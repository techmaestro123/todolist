const Post = require('../models/post');

module.exports.home = async function(req, res){
   

    
    let posts = await Post.find({})
            .sort('-createdAt')
            .populate('user')
            .populate({
                path: 'comments',
                populate: {
                    path: 'user'
                }
               
            })
            
            return res.render('home', {
                title: "My Home Page",
                posts: posts 
            })

}

