const mongoose = require('mongoose')

const schemaPerson = new mongoose.Schema({
    name : {type : String , required:true},
    password : {type : String ,required:true},
    email : {type : String ,required:true}
})

const SchemaPersonModel =  mongoose.model('person' , schemaPerson)


// crud export
module.exports = SchemaPersonModel;

