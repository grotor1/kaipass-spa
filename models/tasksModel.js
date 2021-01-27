const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TasksSchema = new Schema({
    taskType: String, //necessary
    taskQuestion: String, //necessary
    rightAnswerInput: String, //or this
    rightAnswersChoose: [{answer: String, rightOne: Boolean}], //or this
    achievements: [{
        _id_achievements: Schema.Types.ObjectId,
    }] //unnecessary
},{
    timestamps: true,
    collection: 'tasks'
});

module.exports = mongoose.model('Task', TasksSchema);

