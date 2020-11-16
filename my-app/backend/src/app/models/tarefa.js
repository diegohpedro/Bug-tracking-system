const mongoose = require ('mongoose');
const Schema= mongoose.Schema

const TarefaSchema = new Schema ({
    assunto: {type: String, required: true},
    descricao: {type: String, required: true},
    chamado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chamado',
        require: true,
    },

    atribuido: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true,
        default: 'Ninguém'
    },

    completo: {
        type: Boolean,
        require: true,
        default: false
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Tarefa= mongoose.model('Tarefa', TarefaSchema)

module.exports = Tarefa;