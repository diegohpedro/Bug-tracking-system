const mongoose = require ('mongoose');
const Schema= mongoose.Schema

const bugsSchema = new Schema ({
    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    status: {type: String, required: true},
    date: {type: Date, required:true},

})

const Bugs= mongoose.model('Bugs', bugsSchema)

module.exports = Bugs;