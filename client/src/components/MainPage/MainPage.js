import './MainPage.css'
import React from 'react'
import ReactDOM from "react-dom";
import Carousel from 'react-elastic-carousel';
import AchivmentCarousel from "./AchivmentCarousel.js";
import item from "./item.js"
import './css/hover.css'
import arrow from './media/right-arrow.svg'
import TasksScrollbar from "./TasksScrollbar";

class MainPage extends React.Component{
    render(){
        return(
            <div className="mainpage-wrapper">
                <div className="mainpage-wrapper__left-section">

                    <div className="mainpage-wrapper__left-section__courses-block">
                        <div className="mainpage-wrapper__left-section__courses-block-title">
                            <h3>Выбери свой путь обучения</h3>
                        </div>

                            <div className="mainpage-wrapper__left-section__courses-block__content">
                                <Carousel>

                                    <item>

                                        <div className="mainpage-wrapper__left-section__courses-block__content__top-section">
                                        <div className="mainpage-wrapper__left-section__courses-block__content__top-section__left-section">
                                            <h3>React JS для новичков</h3>
                                            <p><span>nnn</span> участников</p>
                                        </div>
                                        <div className="mainpage-wrapper__left-section__courses-block__content__top-section__right-section">
                                            <p>nnn часов<br/>Тип материала</p>
                                        </div>
                                    </div>
                                        <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section">
                                        <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__left-section">
                                            <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__left-section__img-block">
                                                <img src="" alt="course-image"/>
                                            </div>
                                        </div>
                                        <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section">
                                            <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section__title">
                                                <p>Epic Title for good comerce</p>
                                            </div>
                                            <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section__main-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                            <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section__course-button hvr-grow-shadow">
                                                <a className="" href="">
                                                    <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section__course-button__button">
                                                        <p>Начать</p>
                                                        <img src={arrow} alt=""/>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    </item>

                                <item>

                                    <div className="mainpage-wrapper__left-section__courses-block__content__top-section">
                                        <div className="mainpage-wrapper__left-section__courses-block__content__top-section__left-section">
                                            <h3>React JS для новичков</h3>
                                            <p><span>nnn</span> участников</p>
                                        </div>
                                        <div className="mainpage-wrapper__left-section__courses-block__content__top-section__right-section">
                                            <p>nnn часов<br/>Тип материала</p>
                                        </div>
                                    </div>
                                    <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section">
                                        <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__left-section">
                                            <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__left-section__img-block">
                                                <img src="" alt="course-image"/>
                                            </div>
                                        </div>
                                        <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section">
                                            <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section__title">
                                                <p>Epic Title for good comerce</p>
                                            </div>
                                            <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section__main-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                            <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section__course-button hvr-grow-shadow">
                                                <a className="" href="">
                                                    <div className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section__course-button__button">
                                                        <p>Начать</p>
                                                        <img src={arrow} alt=""/>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </item>

                                </Carousel>
                            </div>




                    <div className="mainpage-wrapper__left-section__achivments-block">
                        <div className="mainpage-wrapper__left-section__achivments-block__title">
                            <h3>Будущие достижения</h3>
                        </div>
                        <div className="mainpage-wrapper__left-section__achivments-block__content">
                            <AchivmentCarousel></AchivmentCarousel>
                        </div>
                    </div>
                    </div>
                </div>






                <div className="mainpage-wrapper__right-section">
                
                    <div className="mainpage-wrapper__right-section__your-tasks">
                        <div className="mainpage-wrapper__right-section__your-tasks__title">
                            <h3>Твои задания</h3>
                        </div>
                        <div className="mainpage-wrapper__right-section__your-tasks__content">
                            <div className="mainpage-wrapper__right-section__your-tasks__content__top-section">
                                <TasksScrollbar></TasksScrollbar>
                            </div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__stripe">

                            </div>
                            <div className="mainpage-wrapper__right-section__your-tasks__content__bottom-section">
                                <div className="mainpage-wrapper__right-section__your-tasks__content__bottom-section__title">
                                    <p>Твои очки обучения</p>
                                </div>
                                <div className="mainpage-wrapper__right-section__your-tasks__content__bottom-section__under-construction"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default MainPage