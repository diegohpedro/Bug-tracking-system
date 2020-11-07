const router = require('express').Router();
let Bugs = require('../models/bugs.model')

router.route('/').get((req,res) => {
    Bugs.find()
    .then(bugs => res.json(bugs))
    .catch(err => res.status(400).json('Erro: ' + err));
})

router.route('/add').post ((req,res) => {
    const titulo= req.body.titulo;
    const descricao=req.body.descricao;
    const status= req.body.status;
    const date= Date.parse(req.body.date);

    const newBug = new Bugs ({
        titulo,
        descricao,
        status,
        date
    });

    newBug.save()
    .then(() => res.json('Novo BUG adicionado'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports= router;