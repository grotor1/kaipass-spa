import './MainPage.css'
import React from 'react'

class MainPage extends React.Component{
    render(){
        return(
            <div className="mainpage-wrapper">
                <div className="mainpage-wrapper__left-section">
                    <div className="mainpage-wrapper__left-section__courses-block">
                        <div className="mainpage-wrapper__left-section__courses-block__title">

                        </div>
                        <div className="mainpage-wrapper__left-section__courses-block__content">
                            <div className="mainpage-wrapper__left-section__courses-block__content__right-section">

                            </div>
                            <div className="mainpage-wrapper__left-section__courses-block__content__left-section">
                                
                            </div>
                        </div>
                    </div>
                    <div className="mainpage-wrapper__left-section__achivments-block">

                    </div>
                </div>
                <div className="mainpage-wrapper__right-section">
                    <div className="mainpage-wrapper__right-section__your-tasks">

                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage