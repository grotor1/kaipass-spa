import Carousel from 'react-elastic-carousel';
import React from 'react'

import item from "./item";
import './AchivmentCarousel.css'

class AchivmentCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            err: "",
            currentAchievements: [
                {
                    _id: "",
                    name: "",
                    desc: "",
                    maxValue: 0,
                    currentValue: 0,
                }
            ]
        }
    }

    componentDidMount() {
        const achievements = this.props.userInf.achievements.map((element) => {
            this.loadAchievementsFromServer(element._id_achievements, element.currentValue);
        });
    }

    loadAchievementsFromServer(_id_achievements, currentValue) {
        fetch(`/api/achievementsGet/${_id_achievements}`)
            .then((data) => data.json())
            .then((res) => {
                if (!res.success) {
                    this.setState({error: res.error});
                } else {
                    if (this.state.currentAchievements[0].desc === "") {
                        this.setState({
                            ...this.state,
                            currentAchievements: [{...res.data, currentValue: currentValue}]
                        }, () => {
                        });
                    } else {
                        const currentAchievements = this.state.currentAchievements;
                        currentAchievements.push({...res.data, currentValue: currentValue})
                        this.setState({
                                ...this.state,
                                currentAchievements: currentAchievements
                            }
                        );
                    }
                }
            });
    }

    render() {
        return (
            <Carousel itemsToShow={3} itemsToScroll={1}>
                {this.state.currentAchievements.map((element) => {
                    return (
                        <item>
                            <div className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive">
                                <div
                                    className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive__border-top">

                                </div>
                                <div
                                    className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive__text">

                                    <p>{element.name}</p>
                                    <span><p>{element.desc}</p></span>

                                </div>
                                <div
                                    className="mainpage-wrapper__left-section__achivments-block__content__carousel-achive__text__progressbar">
                                    <div className="progressbar-2">
                                        <span></span>
                                    </div>
                                    <p>{element.currentValue}/{element.maxValue}</p>
                                </div>
                            </div>
                        </item>
                    );
                })}
            </Carousel>
        )
    }
}

export default AchivmentCarousel