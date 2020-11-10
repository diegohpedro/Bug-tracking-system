const mongoose = require ('mongoose');
const Schema= mongoose.Schema;

const usuarioSchema = new Schema ({
    nome: {type: String,required:true},
    email: {type: String,required:true},
    senha: {type:String,required:true}


});

const Usuario= mongoose.model('Usuario', usuarioSchema)

module.exports = Usuario;