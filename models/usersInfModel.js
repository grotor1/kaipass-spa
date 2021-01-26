const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersInfSchema = new Schema({
    nickname: String, //necessary
    name: String, //unnecessary
    surname: String, //unnecessary
    aboutMe: String, //unnecessary
    email: String, //necessary
    _id_userLog: Schema.Types.ObjectId, //necessary
    courses: [{
        _id_courses: Schema.Types.ObjectId,
        currentValue: Number
    }], //unnecessary
    achievements: [{
        _id_achievements: Schema.Types.ObjectId,
        currentValue: Number
    }], //unnecessary
    points: Number, //unnecessary for init
    rating: Number, //unnecessary for init
    role: String //necessary for init
},{
    timestamps: true,
    collection: 'usersInf'
});

module.exports = mongoose.model('UserInf', UsersInfSchema);