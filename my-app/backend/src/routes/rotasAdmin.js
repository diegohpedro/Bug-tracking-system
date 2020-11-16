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

module.exports= router;