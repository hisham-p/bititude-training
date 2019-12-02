// imports
const express = require('express');
const router = express.Router()
const {sendResponse} = require('../controller/controller')


// requests and responses
router.get('/',sendResponse);

// exports the router
module.exports = router;