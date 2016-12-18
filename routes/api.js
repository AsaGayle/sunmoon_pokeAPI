//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Pokemon = require('../models/pokemon');
var Attack = require('../models/attack')
//Routes
Pokemon.methods(['get','put','post','delete']);
Pokemon.register(router, '/products');

//Return Router
module.exports = router;
