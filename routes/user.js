const express=require('express');
const router= express.Router();

const usercontroller=require('../controllers/usercontroller');


router.get('/profile',usercontroller.profile);
router.get('/sign-in',usercontroller.signin);
router.get('/sign-up',usercontroller.signup);
router.post('/create',usercontroller.create);
router.post('/create-session',usercontroller.createsession);

module.exports=router;