const express = require ('express');
const cors = require ('cors');
const mongoose= require ('mongoose')


require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect (uri, {useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true});

const connection= mongoose.connection;
connection.once('open', () => {
 console.log("Conexão com MongoDB estabelecida")
})

const usuariosRouter= require('./routes/usuarios');
const bugsRouter= require('./routes/bugs');

app.use('/usuarios', usuariosRouter);
app.use('/bugs', bugsRouter);


app.listen (port, () => {
    console.log (`Servidor conectado na porta: ${port}`)
});