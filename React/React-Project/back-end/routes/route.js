// imports
const express = require('express');
const router = express.Router()
const {
    sendResponse,
    getMovies,
    getIndustries,
    insertMovies,
    getAllMovies
} = require('../controllers/controller');

// <------- routes ------->
// get all movies
router.get("/movies",getAllMovies);
// get all industries
router.get("/industries",getIndustries);
// get all movies inside a perticular industry
router.get("/industries/:industry", sendResponse);
// get selected movie
router.get("/industries/:industry/:movies", getMovies)
// post movies
router.post('/newfilm/newfilms',insertMovies)


// exports the router
module.exports = router;