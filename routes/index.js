const express=require('express');

const router=express.Router();
const homecontroller=require('../controllers/homecontroller');

console.log('route loaded');
router.get('/',homecontroller.home);

module.exports=router;