const mongoose = require('mongoose')

const simpleModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    messageText: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
const simpleModel = module.exports = db.model('simpleModel', simpleModel);
module.exports.get = function(callback, limit) {
    simpleModel.find(callback).limit(limit);
}