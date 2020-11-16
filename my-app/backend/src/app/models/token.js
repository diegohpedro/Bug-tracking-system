const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema(
    {
        token: String
    },
    {collection: 'tokens'}
);

module.exports = mongoose.model('Token', TokenSchema)