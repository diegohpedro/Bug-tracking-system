const express= require ('express');

const router = express.Router();
const authMiddleware = require('../middlewares/auth');

const Projeto = require('../models/projeto');
const Tarefa = require('../models/tarefa');
const Chamado = require('../models/chamado');
const Usuario = require('../models/usuario');

router.get('/autenticar', authMiddleware, async (req,res) => {
    try {

        const usuario = await Usuario.findOne({_id: req.userId})

        if(!usuario.admin)
            return res.status(401).send({erro: 'Usuário não é um admin'})

        res.send(usuario);
    } catch (err) {
        res.send(err)
    }
})

router.get('/dashboard',authMiddleware, async (req, res) => {
    try {
        const chamados = await Chamado.find().populate('usuario');

        return res.send(chamados)
    } catch (err) {
        return res.status(400).send({erro: 'Erro na requisição'});
    }
});

router.get('/projetos',authMiddleware, async(req,res) => {
    try {
        const projetos = await Projeto.find().populate(['usuario', 'tarefas']);

        return res.send({projetos});
    } catch {
        return res.status(400).send({erro: 'Erro na requisição'});
    }
})

router.post('/novoprojeto',authMiddleware, async (req,res) => {
    try {
        const {assunto, descricao, tarefas } = req.body;

        const projeto = await Projeto.create({assunto, descricao, usuario: req.userId});

        await Promise.all(tarefas.map(async tarefa => {
            const projetoTarefa = new Tarefa({...tarefa, projeto: projeto._id});

            await projetoTarefa.save();
            
            projeto.tarefas.push(projetoTarefa);
        }));

        await projeto.save();

        return res.send({projeto});

    } catch {
        return res.status(400).send({erro: 'Erro ao criar.'})
    }
});

router.get('/projeto/:id',authMiddleware, async(req, res) => {
    try {
        const projeto = await Projeto.findById(req.params.id).populate(['usuario', 'tarefas']);
        
        return res.send({projeto});
    } catch (err) {
        res.status(400).send({erro: 'Nenhum projeto encontrado'})
    }
});

router.put('/projeto/:id',authMiddleware, async(req, res) => {
    try {
        const {assunto, descricao, tarefas } = req.body;

        const projeto = await Projeto.findByIdAndUpdate(req.params.id, {
            assunto, 
            descricao}, {new: true});

        projeto.tarefas = [];
        await Tarefa.remove({projeto: projeto._id});

        await Promise.all(tarefas.map(async tarefa => {
            const projetoTarefa = new Tarefa({...tarefa, projeto: projeto._id});

            await projetoTarefa.save();
            
            projeto.tarefas.push(projetoTarefa);
        }));

        await projeto.save();

        return res.send({projeto});

    } catch {
        return res.status(400).send({erro: 'Erro na atualização.'})
    }
}); 

router.delete('/projeto/:id',authMiddleware, async(req, res) => {
    try {
        await Projeto.deleteOne({_id: req.params.id})

        return res.send({sucess: "Deletado"});
    } catch {
        res.status(400).send({erro: 'Erro ao tentar'});
    }
});

module.exports = app => app.use('/admin', router);


