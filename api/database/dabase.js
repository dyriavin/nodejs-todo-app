const DB_DATA = require('../../config')
const mongoose = require('mongoose')
mongoose.connect(DB_DATA, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function() {
    console.log('Connected to DB' + DB_DATA)
});

module.exports = db