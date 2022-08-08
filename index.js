const express= require('express');
const expressEjsLayouts = require('express-ejs-layouts');


const app=express();
const port=8000;

// used for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-startegy');

const MongoStore = require('connect-mongo');

const cookieparser=require('cookie-parser');
const db=require('./config/mongoose');
const sassMiddleware=require('node-sass-middleware')





app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(express.static('./assets'));
app.use(expressEjsLayouts);
app.use(express.urlencoded());
app.use(cookieparser());




app.set('view engine','ejs');
app.set('views','./views');

app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:'true',
    outputStyle:'extended',
    prefix:'/css'
    }));


app.use(session({
name:'code',
secret:'something',
saveUninitialized:false,
resave:false,
cookie:{
    maxAge:(1000*60*100)
},
store: MongoStore.create({
    //options)
// store : new MongoStore({
   mongoUrl : "mongodb://localhost/web_devlopment",
    autoremove : "disabled",
},function(err){
    console.log("error at mongo store",err || "connection established to store cookie");
})
}));




app.use(passport.initialize());
app.use(passport.session());


app.use(passport.setAuthenticateduser);
app.use('/',require('./routes/index'));

app.listen(port,function(err){
if(err){
    console.log(`Error:${err}`);
    return;
}

console.log(`server is running on port ${port}`);
});