var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var moveSchema = new mongoose.Schema({
    nameEng: String,
    nameJap: String,
    nameFre: String,
    nameGer: String,
    nameKor: String,
    type: String,
    baseDMG: Number,
    critChance: Number,
    pp: Number,
    accuracy: Number,
    category: String,
    statusEffect: String
});

//Return Models
module.exports = restful.model('Attack', moveSchema);
