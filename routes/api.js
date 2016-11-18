//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Pokemon = require('../models/product');
//Routes
Pokemon.methods(['get','put','post','delete']);
Pokemon.register(router, '/products');

//Return Router
module.exports = router;
