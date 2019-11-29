// imports
const express = require('express');
const router = express.Router()
const {
    sendResponse,
    getMovies
} = require('../controllers/controller');

// <------- routes ------->
// get all movies
router.get("/:industry", sendResponse);
// get movies
router.get("/:industry/:movie", getMovies)
// post movies
router.post('/newfilm')


// exports the router
module.exports = router;