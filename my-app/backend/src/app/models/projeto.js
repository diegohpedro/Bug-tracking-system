const mongoose = require ('mongoose');
const Schema= mongoose.Schema

const ProjetoSchema = new Schema ({
    assunto: {type: String, required: true},
    descricao: {type: String, required: true},
    orientacoes: {type: String, required: true},
    status: {type: Number, required: true, default: 1},
    chamado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chamado'
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    tarefas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tarefa'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Projeto = mongoose.model('Projeto', ProjetoSchema)

module.exports = Projeto;