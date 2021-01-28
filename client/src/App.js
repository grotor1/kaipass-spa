import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/Header.js';
import footer from './media/Footer_Frame.svg';

import MainPage from './components/MainPage/MainPage.js'
import React from 'react'
import MyCourses from "./components/MyCourses/MyCourses";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const login = "grotor";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            err: "",
            currentUser: {
                _id: "",
                courses: [
                    {
                        _id_courses: "",
                        currentValue: 0
                    }
                ],
                achievements: [
                    {
                        _id_achievements: "",
                        currentValue: 0
                    }
                ],
                nickname: "",
                name: "",
                surname: "",
                aboutMe: "",
                email: "",
                rating: 0,
                role: ""
            }
        }
    }


    loadUserInfFromServer(login) {
        fetch(`/api/usersInfGet/${login}`)
            .then(data => data.json())
            .then((res) => {
                if (!res.success) {
                    this.setState({error: res.error});
                } else {
                    this.setState({currentUser: res.data});
                }
            });
    }

    componentDidMount() {
        this.loadUserInfFromServer(login);
    }

    render() {
        return (

            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/main">
                            <div className="App-Wrapper">
                                <Navbar userInf={this.state.currentUser}/>
                                <div className="left-section">
                                    <Header/>
                                    <MainPage userInf={this.state.currentUser}/>
                                    <div className="left-section__footer">
                                        <img src={footer}/>
                                    </div>
                                </div>
                            </div>
                            <div className="left-section__footer__patch"/>
                        </Route>
                        <Route exact path="/courses">
                            <div className="App-Wrapper">
                                <Navbar userInf={this.state.currentUser}/>
                                <div className="left-section">
                                    <Header/>
                                    <div className="left-section__footer">
                                        <img src={footer}/>
                                    </div>
                                </div>
                            </div>
                            <div className="left-section__footer__patch"/>
                        </Route>
                        <Route exact path = "/">
                            <div className="App-Wrapper">
                                <Navbar userInf={this.state.currentUser}/>
                                <div className="left-section">
                                    <Header/>
                                    Добро пожаловать
                                    <div className="left-section__footer">
                                        <img src={footer}/>
                                    </div>
                                </div>
                            </div>
                            <div className="left-section__footer__patch"/>
                        </Route>
                        <Route path="/login">
                            <div className="App-Wrapper">
                                <Login/>
                            </div>
                        </Route>
                        <Route path="/registration">
                            <div className="App-Wrapper">
                                <Registration/>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
