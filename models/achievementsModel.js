const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AchievementsSchema = new Schema({
    name: String, //necessary
    desc: String, //necessary
    maxValue: Number //necessary for init
},{
    timestamps: true,
    collection: 'achievements'
});

module.exports = mongoose.model('Achievements', AchievementsSchema);