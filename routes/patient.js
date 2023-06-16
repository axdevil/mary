const express = require('express');
const router = express.Router();

const patientController = require('../controllers/patientController')

/* GET home page. */
router.get('/', patientController.index);
router.get('/signUp', patientController.signUp)

module.exports = router;