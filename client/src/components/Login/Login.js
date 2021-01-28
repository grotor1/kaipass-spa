import React from 'react'
import './Login.css'
import right_svg from './media/vector1.svg'
import left_svg from './media/vector2.svg'
import right_arrow_login from './media/right-arrow-login.svg'
import './hover.css'

class Login extends React.Component{
    render() {
        return(
            <div className="login-wrapper">
                <div className="login-wrapper__content">
                    <div className="login-wrapper__content__left-section">
                        <img className='left-svg' src={left_svg} alt=""/>
                        <div className="login-wrapper__content__right-section__login-content">
                            <p className="login-wrapper__content__right-section__login-content__title">Войти</p>
                            <p className="login-wrapper__content__right-section__login-content__under-title">Чтобы использовать <span>Kai</span>Pass <br/> необходимо войти</p>

                                <div className="input-container">
                                    <input type="text" required=""/>
                                    <label>Логин</label>
                                </div>
                                <div className="input-container another-margin">
                                    <input type="text" required=""/>
                                    <label>Пароль</label>
                                </div>


                            <div className="login-wrapper__content__right-section__login-content__forgot-password">
                                <p>Забыли пароль? <a href=""><span>Нажмите сюда</span></a></p>
                            </div>
                            <div className="login-wrapper__content__right-section__login-content__button hvr-grow-shadow">
                                <a> 
                                    <p>Войти</p>
                                    <img src={right_arrow_login} alt=""/>
                                </a>
                               
                            </div>

                        </div>
                    </div>
                    <div  className="login-wrapper__content__right-section">
                        <img className="right-svg" src={right_svg} alt=""/>
                        <div className="login-wrapper__content__left-section__content">
                            <div className="login-wrapper__content__left-section__content__title">
                                <p>Регистрация</p>
                            </div>
                            <div className="login-wrapper__content__left-section__content__under-title">
                                <p>Чтобы присоединиться <br/>
                                    к <span>Kai</span>Pass необходимо <br/> создать аккаунт</p>
                            </div>
                            <div className="login-wrapper__content__left-section__content__button hvr-forward ">
                                <p>Создать</p>
                                <img src={right_arrow_login} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login