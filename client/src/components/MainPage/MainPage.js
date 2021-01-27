import './MainPage.css'
import React from 'react'
import arrow from './media/right-arrow.svg'
import Carousel from "react-elastic-carousel";
import item from "./item.js"

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coursesMain: [],
            err: ""
        }
    }

    componentDidMount() {
        this.loadCoursesFromServer();
    }

    loadCoursesFromServer() {
        fetch('/api/coursesGet')
            .then(data => data.json())
            .then((res) => {
                if (!res.success) {
                    this.setState({error: res.error});
                } else {
                    const sendData = res.data.slice(0, 4);
                    this.setState({coursesMain : sendData});
                }
            });
    }

    render() {
        return (
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
                                <Carousel itemsToShow={3} itemsToScroll={1}>
                                    <item>
                                        <div
                                            className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive"></div>
                                    </item>
                                </Carousel>
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

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default MainPage