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

        return res.send(chamados);
    } catch (err) {
        return res.status(400).send({erro: 'Erro na requisição'});
    }
});

router.get('/perfil',authMiddleware, async (req, res) => {
    try {
        
        const usuario = await Usuario.findById(req.userId);
        
        res.send(usuario);
    } catch (err) {
        res.send(err);
    }
});

router.get('/chamado/:id',authMiddleware, async (req, res) => {
    try {
        const chamado = await Chamado.findById(req.params.id).populate('usuario');

        res.send(chamado);
    } catch (err) {
        res.status(400).send({ erro: 'Nenhum chamado encontrado' })
    }
});

router.get('/usuarios',authMiddleware, async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.userId);
        
        if(!usuario.admin)
            return res.status(401).send({erro: 'Usuário sem permissão'});

        const usuarios = await Usuario.find();

        res.send(usuarios);
    } catch {
        res.status(400).send({erro: 'Erro ao requisitar usuários'});
    }
});

router.get('/usuario/:id',authMiddleware, async (req, res) => {
    try {
        const admin = await Usuario.findById(req.userId);
        
        if(!admin.admin)
            return res.status(401).send({erro: 'Usuário sem permissão'});

        const usuario = await Usuario.findById(req.params.id);

        res.send(usuario);
    } catch {
        res.status(400).send({erro: 'Erro ao requisitar usuários'});
    }
});

router.patch('/usuario/:id', authMiddleware, async (req, res) => {
    try {
        const admin = await Usuario.findById(req.userId);
        
        if(!admin.admin)
            return res.status(401).send({erro: 'Usuário sem permissão'});

        const usuario = await Usuario.findByIdAndUpdate(req.params.id, {dev: true});

        res.send(usuario);
    } catch {
        res.status(400).send({erro: 'Erro ao tentar promover usuário'});
    }
});

router.patch('/usuario/remove/:id', authMiddleware, async (req, res) => {
    try {
        const admin = await Usuario.findById(req.userId);
        
        if(!admin.admin)
            return res.status(401).send({erro: 'Usuário sem permissão'});

        const usuario = await Usuario.findByIdAndUpdate(req.params.id, {dev: false});

        res.send(usuario);
    } catch {
        res.status(400).send({erro: 'Erro ao tentar promover usuário'});
    }
});

router.get('/projetos',authMiddleware, async(req,res) => {
    try {
        const projetos = await Projeto.find().populate(['usuario', 'tarefas']);

        return res.send(projetos);
    } catch {
        return res.status(400).send({erro: 'Erro na requisição'});
    }
});

router.post('/novoprojeto',authMiddleware, async (req,res) => {
    try {
        const {assunto, descricao, orientacoes, tarefas, chamado } = req.body;

        const projeto = await Projeto.create({assunto, descricao, orientacoes, chamado, usuario: req.userId});

        await Promise.all(tarefas.map(async tarefa => {
            const projetoTarefa = new Tarefa({...tarefa, projeto: projeto._id});

            await projetoTarefa.save();
            
            projeto.tarefas.push(projetoTarefa);
        }));

        await projeto.save();

        await Chamado.findByIdAndUpdate(chamado, {status: 2});

        return res.send(projeto);

    } catch {
        return res.status(400).send({erro: 'Erro ao criar.'})
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

router.put('/projeto/finalizar/:id', authMiddleware, async (req, res) => {
    try {
        const projeto = await Projeto.findByIdAndUpdate(req.params.id, {status: 3});
        
        return res.send(projeto);

    } catch {
        return res.status(400).send({ erro: 'Erro na requisição' });
    }
});

router.put('/projeto/recusar/:id', authMiddleware, async (req, res) => {
    try {
        const projeto = await Projeto.findByIdAndUpdate(req.params.id, {status: 1});
        
        return res.send(projeto);

    } catch {
        return res.status(400).send({ erro: 'Erro na requisição' });
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

router.get('/tarefas',authMiddleware, async(req,res) => {
    try {
        const tarefas = await Tarefa.find().populate(['projeto', 'responsavel']);

        return res.send(tarefas);
    } catch {
        return res.status(400).send({erro: 'Erro na requisição'});
    }
});

module.exports = app => app.use('/admin', router);


