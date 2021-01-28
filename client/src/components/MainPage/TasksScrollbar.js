import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import  './TasksScrollbar.css'
import arrow from './media/right-arrow 1.svg'

const container = document.querySelector('container');
const ps = new PerfectScrollbar(container);

class TasksScrollbar extends React.Component{
    render() {
        return(
            <PerfectScrollbar>
                <div id="container" className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container scrollbar-primary">
                    <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change first-item">
                        <a href="">
                        <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                        <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                        <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                            <p>Обучение ReactDOM.Router<br/><span>ReactJS</span></p>
                        </div>
                        <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                            <img src={arrow} alt=""/>
                        </div>
                    </a>
                    </div>
                    <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                        <a href="">
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                                <p>Обучение ReactDOM.Router<br/><span>ReactJS</span></p>
                            </div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                        <a href="">
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                                <p>Обучение ReactDOM.Router<br/><span>ReactJS</span></p>
                            </div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                        <a href="">
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                                <p>Обучение ReactDOM.Router<br/><span>ReactJS</span></p>
                            </div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                        <a href="">
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                                <p>Обучение ReactDOM.Router<br/><span>ReactJS</span></p>
                            </div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
                                <img src={arrow} alt=""/>
                            </div>
                        </a>
                    </div>
                    <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item border-color-change">
                        <a href="">
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__theme"></div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__preview"></div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__text">
                                <p>Обучение ReactDOM.Router<br/><span>ReactJS</span></p>
                            </div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section__tasks-container__item__arrow">
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