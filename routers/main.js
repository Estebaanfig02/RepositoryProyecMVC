const path = require('path')
const mainControllers = require('../controllers/mainController')
const express = require('express')
const router = express.Router()

router.get('/', mainControllers.index)
router.get('/about', mainControllers.about)


module.exports = router