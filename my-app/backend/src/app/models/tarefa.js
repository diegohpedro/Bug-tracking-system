const mongoose = require ('mongoose');
const Schema= mongoose.Schema

const TarefaSchema = new Schema ({
    descricao: {type: String, required: true},
    projeto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projeto',
        require: true,
    },

    responsavel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
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