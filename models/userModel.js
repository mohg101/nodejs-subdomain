const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String
    }
});

module.exports = mongoose.model('User', user);