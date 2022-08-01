const express= require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const { get } = require('./routes');
const router = require('./routes');
const app=express();
const port=8000;

const cookieparser=require('cookie-parser');
const db=require('./config/mongoose');

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(express.static('./assets'));
app.use(expressEjsLayouts);
app.use(express.urlencoded());
app.use(cookieparser());


app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');




app.listen(port,function(err){
if(err){
    console.log(`Error:${err}`);
    return;
}

console.log(`server is running on port ${port}`);
});