const express= require ('express');

const router = express.Router();
const authMiddleware = require('../middlewares/auth');

const Projeto = require('../models/projeto');
const Tarefa = require('../models/tarefa');
const Chamado = require('../models/chamado');
const Usuario = require('../models/usuario');

router.get('/dashboard',authMiddleware, async (req, res) => {
    try {
        const projetos = await Projeto.find().populate(['usuario', 'tarefas']);

        return res.send(projetos);
    } catch {
        return res.status(400).send({erro: 'Erro na requisição'});
    }
});

module.exports = app => app.use('/dev', router);


