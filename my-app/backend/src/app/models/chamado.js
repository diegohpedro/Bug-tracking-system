const mongoose = require ('mongoose');
const Schema= mongoose.Schema

const ChamadoSchema = new Schema ({
    assunto: {type: String, required: true},
    descricao: {type: String, required: true},
    status: {type: Number, default: 1},
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Chamado = mongoose.model('Chamado', ChamadoSchema)

module.exports = Chamado;