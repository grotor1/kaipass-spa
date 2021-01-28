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
            currentLessons: [{
                name: "", //necessary
                desc: "", //necessary
                previewSrc: "", //necessary
                text: "", //necessary
                mediaPhotoSrc: [""], //unnecessary
                mediaVideoSrc: [""], //unnecessary
                mediaFileUrl: [""], //unnecessary
                tasks: [{_id_task: ""}], //unnecessary
                achievements: [{
                    _id_achievements: "",
                }] //unnecessary
            }]
        };
    }

    componentDidMount() {
        this.setStateLesson();
    }

    setStateLesson() {
        this.props.userInf.courses.map(element => {
            console.log(element);
            this.loadFromServer(element._id_courses, element.currentValue);
        });
    };

    loadFromServer(_id_course, currentValue) {
        fetch(`/api/coursesGet/${_id_course}`)
            .then((data) => data.json())
            .then((res) => {
                    if (!res.success) {
                        this.setState({error: res.error});
                    } else {
                        const _id_lesson = res.data.lessons[currentValue]._id_lesson;
                        const name = res.data.name;
                        fetch(`/api/lessonsGet/${_id_lesson}`)
                            .then((data) => data.json())
                            .then((res) => {
                                if (!res.success) {
                                    this.setState({error: res.error});
                                } else {
                                    if (this.state.currentLessons[0].name === "") {
                                        this.setState({
                                            ...this.state,
                                            currentLessons: [{...res.data, nameTheme: name}]
                                        }, () => {
                                            console.log(true);
                                        });
                                    } else {
                                        const currentLessons = this.state.currentLessons;
                                        currentLessons.push({...res.data, nameTheme: name})
                                        this.setState({
                                                ...this.state,
                                                currentLessons: currentLessons
                                            }
                                        );
                                    }
                                }
                            })
                    }
                }
            );
    }


    render() {
        return (
            <PerfectScrollbar>
                {this.state.currentLessons.map(element => {
                    console.log(element);
                    return (
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
                                        <p>{element.name}<br/><span>{element.nameTheme}</span></p>
                                    </div>
                                    <div
                                        className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                        <img src={arrow} alt=""/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </PerfectScrollbar>
        )
    }
}

export default TasksScrollbar