const mongoose = require ('mongoose');
const Schema= mongoose.Schema

const bugsSchema = new Schema ({
    assunto: {type: String, required: true},
    descricao: {type: String, required: true},
    date: {type: Date, required:true},
    status: {type: Number, required: true, default: 1},
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    categoria: {type: String, required: true}
})

const Bugs= mongoose.model('Bugs', bugsSchema)

module.exports = Bugs;