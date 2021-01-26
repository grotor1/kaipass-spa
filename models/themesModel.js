const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThemesSchema = new Schema({
    name: String, //necessary
    desc: String, //necessary
    coursesCount: Number, //unnecessary for init
    courses: [{
        _id_courses: Schema.Types.ObjectId,
    }], //unnecessary for init
    achievements: [{
        _id_achievements: Schema.Types.ObjectId,
    }] //unnecessary for init
},{
    timestamps: true,
    collection: 'themes'
});

module.exports = mongoose.model('Theme', ThemesSchema);