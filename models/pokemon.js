var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var pokeSchema = new mongoose.Schema({
  nameEng: String,
  nameJap: String,
  nameFre: String,
  nameGer: String,
  nameKor: String,
  type1: String,
  type2: String,
  evoLevel: Number,
  heightFt: Number,
  heightIn: Number,
  weightLbs: Number,
  weightKg: Number,
  ability1: String,
  ability2: String,
  ability3: String,
  natDexNum: Number,
  aloDexNum: Number,
  meleDexNum: Number,
  akaDexNum: Number,
  ulaDexNum: Number,
  ponDexNum: Number,
  classification: String,
  captureRate: Number,
  mGenderRatio: Number,
  fGenderRatio: Number
});

var moveSchema = new mongoose.Schema({

});

//Return model
module.exports = restful.model('Pokemon', pokeSchema);
