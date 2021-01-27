import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/Header.js';
import footer from './media/Footer_Frame.svg';
import MainPage from './components/MainPage/MainPage.js';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const login = "grotor"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            err: "",
            currentUser: {}
        };
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
        console.log(this.state.currentUser + this.state.err);
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-Wrapper">
                        <Navbar  userInf={this.state.currentUser}/>
                        <div className="left-section">
                            <Header/>
                            <Switch>
                                <Route exact path="/">
                                    <MainPage userInf={this.state.currentUser}/>
                                </Route>
                                <Route exact path="/course">
                                    c
                                </Route>
                            </Switch>
                            <div className="left-section__footer">
                                <img src={footer}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
