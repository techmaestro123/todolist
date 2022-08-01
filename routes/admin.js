const express= require('express');

const router=express.Router();

const admincontroller=require('../controllers/admincontroller');
router.get('/authority',admincontroller.authority);

module.exports=router;