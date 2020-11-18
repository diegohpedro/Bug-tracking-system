const express= require ('express');

const authMiddleware = require('../middlewares/auth');

const Chamado = require('../models/chamado');
const BlackList = require('../models/blacklist');
const Usuario = require('../models/usuario');

const router = express.Router();

router.use(authMiddleware);

router.get('/dashboard', async (req, res) => {
    try {
        const chamados = await Chamado.find().populate('usuario');

        return res.send({chamados, usuarioId: req.userId});
    } catch (err) {
        return res.status(400).send({erro: 'Erro na requisição'});
    }
});

router.post('/novochamado', async (req,res) => {
    try {
        const {assunto, descricao} = req.body;

        const chamado = await Chamado.create({assunto, descricao, usuario: req.userId});

        return res.send(chamado);

    } catch {
        return res.status(400).send({erro: 'Erro ao criar chamado.'})
    }
});

router.get('/chamado/:id', async(req, res) => {
    try {
        const chamado = await Chamado.findById(req.params.id).populate('usuario');
        
        return res.send({chamado});
    } catch (err) {
        res.status(400).send({erro: 'Nenhum chamado encontrado'})
    }
});

router.get('/perfil', async (req, res) => {
    try {
        
        const usuario = await Usuario.findById(req.userId);
        
        res.send(usuario); 
    } catch (err) {
        res.send(err)
    }
});

router.put('/chamado/:id', async(req, res) => {
    try {
        const {assunto, descricao} = req.body;

        const chamado = await Chamado.findByIdAndUpdate(req.params.id, {
            assunto, 
            descricao}, {new: true});

        return res.send(chamado);

    } catch {
        return res.status(400).send({erro: 'Erro na atualização.'})
    }
}); 

router.delete('/chamado/:id', async(req, res) => {
    try {
        await Chamado.deleteOne({_id: req.params.id})

        return res.send({sucess: "Deletado"});
    } catch {
        res.status(400).send({erro: 'Erro ao tentar'});
    }
});

router.post('/sair', async(req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        if(await BlackList.findOne({token}))
            return res.status(400).send({Erro: 'Token já está na lista negra'});

        await BlackList.create({token});

        return res.send({BlackList});
    } catch {
        return res.status(400).send({erro: 'Erro'});
    }
});

module.exports = app => app.use('/', router);