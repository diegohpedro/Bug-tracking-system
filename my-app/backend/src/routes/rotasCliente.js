const router = require('express').Router();
let Bugs = require('../models/bugs.model')

router.route('/dashboard').get((req,res) => {
    Bugs.find()
    .then(bugs => res.json(bugs))
    .catch(err => res.status(400).json('Erro: ' + err));
})

router.route('/tarefa/:id').get((req, res) => {
    Bugs.findOne({_id: req.params.id})
    .then(tarefa => res.json(tarefa))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/novochamado').post ((req,res) => {
    const {assunto, descricao, date, nome, email, telefone, categoria} = req.body;

    const newBug = new Bugs ({
        assunto,
        descricao,
        date,
        nome,
        email,
        telefone,
        categoria
    });

    newBug.save()
    .then(() => res.json('Novo chamado aberto.'))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => { 
    Bugs.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post ((req,res) => {
    Bugs.findById(req.params.id)
    .then(bugs => {
        const titulo= req.body.titulo;
        const descricao=req.body.descricao;
        const status= req.body.status;
        const date= Date.parse(req.body.date);

        Bugs.save()
        .then(() => res.json('BUG atualizado'))
        .catch(err => res.status(400).json('Error: ' + err))
    
    })       
});

module.exports= router;