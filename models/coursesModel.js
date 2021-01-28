const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoursesSchema = new Schema({
    name: String, //necessary
    desc: String, //necessary
    hours: Number, //necessary
    previewTitle: String, //necessary
    previewSrc: String, //necessary
    usersCount: Number, //unnecessary for init
    lessonCount: Number, //necessary
    lessons: [{_id_lesson: Schema.Types.ObjectId}], //necessary
    achievements: [{
        _id_achievements: Schema.Types.ObjectId,
    }] //unnecessary
}, {
    timestamps: true,
    collection: 'courses'
});

module.exports = mongoose.model('Course', CoursesSchema);

