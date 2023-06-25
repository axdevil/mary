const express = require('express');
const router = express.Router();

const patientController = require('../controllers/patientController')

/* GET home page. */
router.get('/', patientController.index);
router.get('/signUp', patientController.signUp)
router.post('/validateSignUp', patientController.validateSignUp)
router.post('/login',patientController.login)

module.exports = router;