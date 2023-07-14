const express = require('express')
const router = express.Router()

const controller = require('../controllers/meetingController')

router.post('/new', controller.new)

module.exports = router