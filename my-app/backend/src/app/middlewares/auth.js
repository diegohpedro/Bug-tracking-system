const BlackList = require('../models/blacklist');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

async function checarToken (token) {
    return await BlackList.findOne({token});
}

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    /* if(!authHeader)
        return res.status(401).send({erro: 'Token não foi informado'});
    
    const parts = authHeader.split(' ');

    if(parts.length !== 2)
        return res.status(401).send({erro: 'Token erro'});
    
    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({erro: 'Token malformatado'});

    if(await checarToken(token))
        return res.status(401).send({Erro: 'Token já está na lista negra'});

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({erro: 'Token inválido'});

        req.userId = decoded.id;
       
        return next();
    }); */
};