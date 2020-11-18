const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs');

const Schema= mongoose.Schema;

const UsuarioSchema = new Schema ({
    nome: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true, 
        unique: true, 
        lowercase: true
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    senha: {type:String,required:true, select: false},
    tipo: {type: Number, required:true, default: 1},
    createdAt: {type: Date, default: Date.now}
});

UsuarioSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

const Usuario = mongoose.model('Usuario', UsuarioSchema)

module.exports = Usuario;