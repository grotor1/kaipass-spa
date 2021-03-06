import React from 'react'
import './Login.css'
import right_svg from './media/vector1.svg'
import left_svg from './media/vector2.svg'
import right_arrow_login from './media/right-arrow-login.svg'
import './hover.css'
import {Link, withRouter} from "react-router-dom";

export const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="login-wrapper__content">
                <div className="login-wrapper__content__left-section">
                    <img className='left-svg' src={left_svg} alt=""/>
                    <div className="login-wrapper__content__right-section__login-content">
                        <p className="login-wrapper__content__right-section__login-content__title">Войти</p>
                        <p className="login-wrapper__content__right-section__login-content__under-title">Чтобы
                            использовать <span>Kai</span>Pass <br/> необходимо войти</p>

                        <div className="input-container">
                            <input id="username" type="text" required=""/>
                            <label>Логин</label>
                        </div>
                        <div className="input-container another-margin">
                            <input id="password" type="text" required=""/>
                            <label>Пароль</label>
                        </div>


                        <div className="login-wrapper__content__right-section__login-content__forgot-password">
                            <p>Забыли пароль? <a href=""><span>Нажмите сюда</span></a></p>
                        </div>
                        <Link to="/main">
                            <div
                                className="login-wrapper__content__right-section__login-content__button hvr-grow-shadow">
                                <p>Войти</p>
                                <img src={right_arrow_login} alt=""/>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className="login-wrapper__content__right-section">
                    <img className="right-svg" src={right_svg} alt=""/>
                    <div className="login-wrapper__content__left-section__content">
                        <div className="login-wrapper__content__left-section__content__title">
                            <p>Регистрация</p>
                        </div>
                        <div className="login-wrapper__content__left-section__content__under-title">
                            <p>Чтобы присоединиться <br/>
                                к <span>Kai</span>Pass необходимо <br/> создать аккаунт</p>
                        </div>
                        <Link to="/registration">
                            <div className="login-wrapper__content__left-section__content__button hvr-forward ">
                                <p>Создать</p>
                                <img src={right_arrow_login} alt=""/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default withRouter(Login);