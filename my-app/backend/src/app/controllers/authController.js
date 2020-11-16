const express= require ('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth'); 
const Usuario = require('../models/usuario');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post('/', async (req, res) => {
    const {email, senha} = req.body;
 
    const usuario = await Usuario.findOne({email}).select('+senha');

    if(!usuario)
        return res.status(400).send({erro: 'Usuário não encontrado'});

    if(!await bcrypt.compare(senha, usuario.senha))
        return res.status(400).send({erro: 'Senha inválida'});

    usuario.senha = undefined;

    res.send({
        usuario, 
        token: generateToken({id: usuario._id})
    });
});

router.post('/cadastro', async (req,res) => {
    const {email} = req.body;
    try {
        if(await Usuario.findOne({email}))
            return res.status(400).send({Erro: 'Email já cadastrado'});

        const usuario = await Usuario.create(req.body);

        usuario.senha = undefined; 

        return res.send({
            usuario,
            token: generateToken()
        });
    } catch (err) {
        return res.status(400).send({Erro: 'Falha no registro.'});
    }
 
});

module.exports = app => app.use('/', router);