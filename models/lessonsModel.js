const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonsSchema = new Schema({
    name: String, //necessary
    desc: String, //necessary
    previewSrc: String, //necessary
    text: String, //necessary
    mediaPhotoSrc: [String], //unnecessary
    mediaVideoSrc: [String], //unnecessary
    mediaFileUrl: [String], //unnecessary
    tasks: [{_id_task: Schema.Types.ObjectId}], //unnecessary
    achievements: [{
        _id_achievements: Schema.Types.ObjectId,
    }] //unnecessary
},{
    timestamps: true,
    collection: 'lessons'
});

module.exports = mongoose.model('Lesson', LessonsSchema);