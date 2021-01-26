const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersLogSchema = new Schema({
    login: String,
    password: String,
}, {
    timestamps: true,
    collection: 'usersLog'
});

module.exports = mongoose.model('UserLog', UsersLogSchema);