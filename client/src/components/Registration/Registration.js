import React from 'react'
import './Registration.css'
import right_svg from './media/vector1.svg'
import left_svg from './media/vector2.svg'
import right_arrow_login from "../Login/media/right-arrow-login.svg";

class Registration extends React.Component{
    render() {
        return(
            <div className="registration-wrapper">
                <div className="registration-wrapper__content">
                    <div className="registration-wrapper__content__left-section">
                        <img className='left-svg' src={right_svg} alt=""/>
                        <div className="registration-wrapper__content__left-section__login-content">
                            <div className="registration-wrapper__content__left-section__login-content__title">
                                <p>Войти</p>
                            </div>
                            <div className="registration-wrapper__content__left-section__login-content__under-title">
                                <p>Уже зарегистрировали аккаунт в <span>Kai</span>Pass</p>
                            </div>
                            <div className="registration-wrapper__content__left-section__login-content__button hvr-forward ">
                                <p>Войти</p>
                                <img src={right_arrow_login} alt=""/>
                            </div>

                        </div>g
                    </div>
                    <div className="registration-wrapper__content__right-section">
                        <img className='right-svg' src={left_svg} alt=""/>
                        <div className="registration-wrapper__content__right-section__registration-content">
                            <div className="registration-wrapper__content__right-section__registration-content__title">
                                <p>Регистрация</p>
                            </div>
                            <div className="registration-wrapper__content__right-section__registration-content__under-title">
                                <p>Создайте свой <span>Kai</span>Pass</p>
                            </div>
                            <div className="input-container">
                                <input type="text" required=""/>
                                <label>Логин</label>
                            </div>
                            <div className="input-container another-margin">
                                <input type="text" required=""/>
                                <label>Почта</label>
                            </div>
                            <div className="input-container">
                                <input type="text" required=""/>
                                <label>Пароль</label>
                            </div>
                            <div className="input-container another-margin">
                                <input type="text" required=""/>
                                <label>Повторите пароль</label>
                            </div>
                            <div className="login-wrapper__content__right-section__registration-content__button hvr-grow-shadow">
                                <a>
                                    <p>Создать</p>
                                    <img src={right_arrow_login} alt=""/>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration