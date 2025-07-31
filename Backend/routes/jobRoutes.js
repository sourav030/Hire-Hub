const express=require('express');
const jobRoutes=express.Router();
const {createJob,getAllJob,getJobTitle,getRecuriterJob,deleteJob}=require('../controllers/jobControllers')
const authentication=require('../middlewares.js/auth')


jobRoutes.post('/createjob',authentication, createJob);
jobRoutes.get('/getalljob',getAllJob)
jobRoutes.get('/getBytitle',getJobTitle)
jobRoutes.get('/recuriterJob',authentication,getRecuriterJob)
jobRoutes.delete('/delete/:job_id', authentication, deleteJob);

module.exports= jobRoutes;