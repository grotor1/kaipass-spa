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
                                    {this.state.coursesMain.map((element) => {
                                        console.log("ok");
                                        return (
                                            <item>
                                                <div
                                                    className="mainpage-wrapper__left-section__courses-block__content__top-section">
                                                    <div
                                                        className="mainpage-wrapper__left-section__courses-block__content__top-section__left-section">
                                                        <h3>{element.name}</h3>
                                                        <p><span>{element.userCount}</span> участников</p>
                                                    </div>
                                                    <div
                                                        className="mainpage-wrapper__left-section__courses-block__content__top-section__right-section">
                                                        <p>{element.hours} часов</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="mainpage-wrapper__left-section__courses-block__content__bottom-section">
                                                    <div
                                                        className="mainpage-wrapper__left-section__courses-block__content__bottom-section__left-section">
                                                        <div
                                                            className="mainpage-wrapper__left-section__courses-block__content__bottom-section__left-section__img-block">
                                                            <img src="" alt="course-image"/>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section">
                                                        <div
                                                            className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section__title">
                                                            <p>{element.previewTitle}</p>
                                                        </div>
                                                        <div
                                                            className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section__main-text">
                                                            <p>{element.desc}</p>
                                                        </div>
                                                        <div
                                                            className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section__course-button hvr-grow-shadow">
                                                            <a className="" href="">
                                                                <div
                                                                    className="mainpage-wrapper__left-section__courses-block__content__bottom-section__right-section__course-button__button">
                                                                    <p>Начать</p>
                                                                    <img src={arrow} alt=""/>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </item>
                                        );
                                    })}
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