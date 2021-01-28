import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './TasksScrollbar.css'
import arrow from './media/right-arrow 1.svg'

const container = document.querySelector('container');
const ps = new PerfectScrollbar(container);

class TasksScrollbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLessons: [],
            currentCourses: []
        };
    }

    componentDidMount() {
        this.setStateCourses();
        this.setStateLesson();
    }

    setStateCourses() {
        this.props.userInf.courses.map(element => {
            console.log(element);
            this.loadCoursesFromServer(element._id_courses, element.currentValue);
        });
    };

    setStateLesson() {
        this.state.currentCourses.map(element => {
            const _id_lesson = element.lessons[element.currentLessons]._id_lesson;
            this.loadLessonsFromServer(_id_lesson);
        });
    };

    loadCoursesFromServer(_id_course, currentValue) {
        fetch(`/api/coursesGet/${_id_course}`)
            .then((data) => data.json())
            .then((res) => {
                if (!res.success) {
                    this.setState({error: res.error});
                } else {
                    if (currentValue < res.data.lessonCount) {
                        const currentCourses = this.state.currentCourses;
                        currentCourses.push({...res.data, currentValue: currentValue});
                        this.setState({
                                ...this.state,
                                currentCourses: currentCourses
                            }
                        );
                    } else {
                        this.setState({error: "fy"});
                    }
                }
            });
    }

    loadLessonsFromServer(_id_lesson) {
        fetch(`/api/lessonsGet/${_id_lesson}`)
            .then((data) => data.json())
            .then((res) => {
                if (!res.success) {
                    this.setState({error: res.error});
                } else {
                    const currentLessons = this.state.currentLessons;
                    currentLessons.push({...res.data})
                    this.setState({
                            ...this.state,
                            currentLessons: currentLessons
                        }
                    );
                }
            });
    }


    render() {
        return (
            <PerfectScrollbar>
                <div id="container"
                     className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container scrollbar-primary">
                    <div
                        className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                        <a href="">
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                                <p>Обучение ReactDOM.Router<br/><span>ReactJS</span></p>
                            </div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div
                        className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                        <a href="">
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                                <p>Обучение ReactDOM.Router<br/><span>ReactJS</span></p>
                            </div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div
                        className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                        <a href="">
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                                <p>Обучение ReactDOM.Router<br/><span>ReactJS</span></p>
                            </div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div
                        className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                        <a href="">
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                                <p>Обучение ReactDOM.Router<br/><span>ReactJS</span></p>
                            </div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div
                        className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                        <a href="">
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                                <p>Обучение ReactDOM.Router<br/><span>ReactJS</span></p>
                            </div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div
                        className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                        <a href="">
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                                <p>Обучение ReactDOM.Router<br/><span>ReactJS</span></p>
                            </div>
                            <div
                                className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </a>
                    </div>

                </div>
            </PerfectScrollbar>
        )

    }
}

export default TasksScrollbar