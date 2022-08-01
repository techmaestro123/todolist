const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/web_devlopment');

const db=mongoose.connection;

db.on('error',console.error.bind('error connecting to database'));


db.once('open',function(){
    console.log('connected to database');
});

module.exports=db;