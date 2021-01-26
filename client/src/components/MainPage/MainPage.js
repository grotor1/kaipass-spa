import './MainPage.css'
import React from 'react'

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
                            <div className="mainpage-wrapper__left-section__courses-block__content__right-section">

                            </div>
                            <div className="mainpage-wrapper__left-section__courses-block__content__left-section">
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="mainpage-wrapper__left-section__achivments-block">
                        <div className="mainpage-wrapper__left-section__achivments-block__title">
                            <h3>Будущие достижения</h3>
                        </div>
                        <div className="mainpage-wrapper__left-section__achivments-block__content"></div>
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