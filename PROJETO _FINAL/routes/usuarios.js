const router = require('express').Router();
let Usuarios = require('../models/usuarios.model')

router.route('/').get((req,res) => {
    Usuarios.find()
    .then(usuarios => res.json(usuarios))
    .catch(err => res.status(400).json('Erro: ' + err));
})

router.route('/add').post ((req,res) => {
    const nome = req.body.nome;

    const novoUsuario = new Usuarios({nome});

    novoUsuario.save()
    .then(()=> res.json('Usuário Adicionado'))
    .catch(err => res.status(400).json("Erro: " + err))
})

module.exports= router;