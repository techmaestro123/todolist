const express=require('express');

const router=express.Router();
const homecontroller=require('../controllers/homecontroller');

console.log('route loaded');
router.get('/',homecontroller.home);
router.use('/user',require('./user'));
router.use('/admin',require('./admin'));
router.use('/post',require('./post'));
router.use('/comments', require('./comments'));

module.exports=router;