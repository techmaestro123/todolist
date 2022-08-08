const express=require('express');
const router= express.Router();
const passport=require('passport');
const usercontroller=require('../controllers/usercontroller');


router.get('/profile',passport.checkAuthentication,usercontroller.profile);
router.get('/sign-in',usercontroller.signin);
router.get('/sign-up',usercontroller.signup);
router.post('/create',usercontroller.create);
router.post('/create-session',passport.authenticate('local',{
    failureRedirect:'/user/sign-in'}
),usercontroller.createsession);

router.get('/sign-out',usercontroller.destroysession);

module.exports=router;