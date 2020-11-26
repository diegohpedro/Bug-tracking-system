const express = require('express');

const router = express.Router();
const authMiddleware = require('../middlewares/auth');

const Projeto = require('../models/projeto');
const Tarefa = require('../models/tarefa');

router.get('/dashboard', authMiddleware, async (req, res) => {
    try {
        const projetos = await Projeto.find().populate(['usuario', 'tarefas']);

        return res.send(projetos);
    } catch {
        return res.status(400).send({ erro: 'Erro na requisição' });
    }
});

router.get('/projeto/:id', authMiddleware, async (req, res) => {
    try {
        const projeto = await Projeto.findById(req.params.id).populate('usuario');

        const tarefas = [];

        await Promise.all(projeto.tarefas.map(async tarefa => {
            const tarefaReq = await Tarefa.findById(tarefa._id).populate('responsavel');
            
            tarefas.push(tarefaReq);
        }));

        return res.send({projeto, tarefas});
    } catch {
        return res.status(400).send({ erro: 'Erro na requisição' });
    }
});

router.put('/projeto/:id', authMiddleware, async (req, res) => {
    try {
        const projeto = await Projeto.findByIdAndUpdate(req.params.id, {status: 2});
        
        return res.send(projeto);

    } catch {
        return res.status(400).send({ erro: 'Erro na requisição' });
    }
});

router.get('/tarefa/:id', authMiddleware, async (req, res) => {
    try {
        const tarefa = await Tarefa.findById(req.params.id).populate('responsavel');

        return res.send(tarefa);
    } catch {
        return res.status(400).send({ erro: 'Erro na requisição' });
    }
});

router.put('/tarefa/:id', authMiddleware, async (req, res) => {
    try {
        const idLogado = req.userId;
        
        const tarefa = await Tarefa.findById(req.params.id).populate('responsavel');
        
        const idResponsavel = tarefa.responsavel._id;

        if (idLogado != idResponsavel)
            return res.status(401).send({ erro: 'Apenas o responsável pela tarefa pode finalizá-la' });
        
        if(tarefa.completo) {
            await Tarefa.updateOne({_id: req.params.id}, {completo: false});
        } else {
            await Tarefa.updateOne({_id: req.params.id}, {completo: true});
        }
        
        return res.send({sucess: 'Atualizado'});

    } catch {
        return res.status(400).send({ erro: 'Erro na requisição' });
    }
});

module.exports = app => app.use('/dev', router);


