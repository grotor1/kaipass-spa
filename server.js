const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const UserLog = require("./models/usersLogModel");
const UserInf = require("./models/usersInfModel");
const Task = require("./models/tasksModel");
const Lesson = require("./models/lessonsModel");
const Course = require("./models/coursesModel");
const Theme = require("./models/themesModel");
const Achievements = require("./models/achievementsModel");

// Loads env variables
require('dotenv').config()

const app = express();
const router = express.Router();


const PORT = process.env.PORT || 3000;


// Adds json parsing middleware
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));

mongoose.connect("mongodb+srv://grotor:V23v10a2004@grotor0.kcsbq.mongodb.net/kaipass?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Setup static directory to serve
app.use(express.static(path.resolve('client', 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
});

router.post("/userLogAdd", (req, res) => {
    const userLog = new UserLog();
    // body parser lets us use the req.body
    const login = req.body.login;
    const password = req.body.password;
    if (!login || !password) {
        // we should throw an error. we can do this check on the front end
        return res.json({
            success: false,
            error: 'You must provide an password and login'
        });
    }
    userLog.login = login;
    userLog.password = password;
    userLog.save(err => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
})

router.post("/userAddInf", (req, res) => {
    const userInf = new UserInf();
    // body parser lets us use the req.body
    const {nickname, name, surname, aboutMe, email, rating, role} = req.body;
    if (!nickname || !email || !role) {
        // we should throw an error. we can do this check on the front end
        return res.json({
            success: false,
            error: 'You must provide an nickname, email, role'
        });
    }
    userInf.nickname = nickname;
    userInf.name = name || "";
    userInf.surname = surname || "";
    userInf.aboutMe = aboutMe || "";
    userInf.email = email;
    userInf.courses = [];
    userInf.achievements = [];
    userInf.rating = rating || 0;
    userInf.role = role;
    userInf.save(err => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});

router.post("/taskAdd", (req, res) => {
    const task = new Task();
    const {taskType, taskQuestion, rightAnswerInput, rightAnswerChoose, achievements} = req.body;
    if (!taskType || !taskQuestion || (!rightAnswerInput && !rightAnswerChoose)) {
        return res.json({
            success: false,
            error: 'You must provide an taskType, taskQuestion, rightAnswer of any type'
        });
    }
    task.taskType = taskType;
    task.taskQuestion = taskQuestion;
    task.rightAnswerInput = rightAnswerInput || "";
    task.rightAnswerChoose = rightAnswerChoose || [];
    task.achievements = achievements || [];
    task.save(err => {
        if (err) return res.json({success: false, error: err})
        return res.json({success: true});
    });
});

router.post("/lessonAdd", (req, res) => {
    const lesson = new Lesson();
    const {name, desc, previewSrc, text, mediaPhotoSrc, mediaVideoSrc, mediaFileUrl, tasks, achievements} = req.body;
    if (!name || !desc || !previewSrc || !text) {
        return res.json({
            success: false,
            error: 'You must provide an name, desc, previewSrc and text'
        });
    }
    lesson.name = name;
    lesson.desc = desc;
    lesson.previewSrc = previewSrc;
    lesson.text = text;
    lesson.mediaPhotoSrc = mediaPhotoSrc || "";
    lesson.mediaVideoSrc = mediaPhotoSrc || "";
    lesson.mediaFileUrl = mediaFileUrl;
    lesson.tasks = tasks;
    lesson.achievements = achievements;
    lesson.save(err => {
        if (err) return res.json({success: false, error: err})
        return res.json({success: true});
    });
});

router.post("/coursesAdd", (req, res) => {
    const course = new Course();
    const {name, desc, hours, previewSrc, userCount, lessonCount, lessons, achievements} = req.body;
    if (!name || !desc || !hours || !previewSrc || !lessonCount || !lessons) {
        return res.json({
            success: false,
            error: 'You must provide an name, desc, hours, previewSrc, maxLessonCount and text'
        });
    }
    course.name = name;
    course.desc = desc;
    course.hours = hours;
    course.previewSrc = previewSrc;
    course.userCount = userCount;
    course.lessonCount = lessonCount;
    course.lessons = lessons;
    course.achievements = achievements;
    course.save(err => {
        if (err) return res.json({success: false, error: err})
        return res.json({success: true});
    });
});

router.post("/themesAdd", (req, res) => {
    const theme = new Theme();
    const {name, desc, coursesCount, courses, achievements} = req.body;
    if (!name || !desc) {
        return res.json({
            success: false,
            error: 'You must provide an name, desc'
        });
    }
    theme.name = name;
    theme.desc = desc;
    theme.coursesCount = coursesCount;
    theme.courses = courses;
    theme.achievements = achievements;
});

router.get("/usersInfGet/:nickname", (req, res) => {
    const {nickname} = req.params;
    UserInf.findOne({"nickname": nickname}, (err, userInf) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: userInf});
    });
});

router.get("/themesGet", (req, res) => {
    Theme.find((err, themes) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: themes});
    });
});

router.get("/coursesGet", (req, res) => {
    Course.find((err, courses) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: courses});
    });
});

router.get("/coursesGet/:_id_course", (req, res) => {
    const {_id_course} = req.params;
    Course.findById(_id_course, (err, course) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: course});
    });
});

router.get("/lessonsGet/:_id_lesson", (req, res) => {
    const {_id_lesson} = req.params;
    Lesson.findById(_id_lesson, (err, lesson) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: lesson});
    });
});

router.get("/taskGet/:_id_task", (req, res) => {
    const {_id_task} = req.params;
    Task.findById(_id_task, (err, task) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: task});
    });
});

router.get("/achievementsGet/:_id_achievements", (req, res) => {
    const {_id_achievements} = req.params;
    Achievements.findById(_id_achievements, (err, achievements) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: achievements});
    });
})

app.use('/api', router);
// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
