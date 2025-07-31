const express=require('express');
const {createApplication, getApplicationsForRecruiter,getUserApplication}=require('../controllers/applicationControllers')
const applicationRouter=express.Router();
const authentication=require('../middlewares.js/auth')

applicationRouter.post('/apply', authentication, createApplication)
applicationRouter.get('/viewApplications', authentication,getApplicationsForRecruiter);
applicationRouter.get('/userApplication',authentication,getUserApplication)

module.exports=applicationRouter