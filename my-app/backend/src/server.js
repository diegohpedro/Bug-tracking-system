const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true, useFindAndModify: true});
mongoose.Promise = global.Promise;

const connection= mongoose.connection;
connection.once('open', () => {
 console.log("Conexão com MongoDB estabelecida")
});

require('./app/controllers/index')(app);

app.listen (port, () => {
    console.log (`Servidor conectado na porta: ${port}`)
});