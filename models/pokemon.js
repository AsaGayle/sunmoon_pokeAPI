//TODO: Fix these issues:
//2016-12-18T12:43:41.493-0500 W NETWORK  [thread1] Failed to connect to 127.0.0.1:27017, reason: errno:10061 No connection could be made because the target machine actively refused it.
//2016-12-18T12:43:41.494-0500 E QUERY    [thread1] Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed :

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



//Return model
module.exports = restful.model('Pokemon', pokeSchema);
