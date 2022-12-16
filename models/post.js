const mongoose=require('mongoose');
const User=require('../models/user');

const postschema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
},{
    timestamps:true
})

const Post=mongoose.model('Post',postschema);
module.exports=Post;