const router = require('express').Router();
let Usuarios = require('../models/usuarios.model')

router.route('/usuarios').get((req,res) => {
    Usuarios.find()
    .then(usuarios => res.json(usuarios))
    .catch(err => res.status(400).json('Erro: ' + err));
})

router.route('/usuario/:id').get((req, res) => {
    Usuarios.findOne({_id: req.params.id})
    .then(usuario => res.json(usuario))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/cadastro').post ((req,res) => {
    const {nome, senha, email, tipo} = req.body;

    const novoUsuario = new Usuarios({nome, senha, email, tipo});

    novoUsuario.save()
    .then(()=> res.json('Usuário Adicionado'))
    .catch(err => res.status(400).json("Erro: " + err))
})

module.exports= router;