const express = require('express');
const { createResume } = require('../controllers/resumeControllers')
const authentication=require('../middlewares.js/auth')
const resumeRoutes = express.Router();
resumeRoutes.post('/uploadResume',authentication,createResume);
module.exports = resumeRoutes;