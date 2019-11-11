const express= require('express');
const router = express.Router()

const {createPost , retrieve} = require('../controller/control');
router.post('/',createPost);
router.get('/',retrieve);
module.exports = router;