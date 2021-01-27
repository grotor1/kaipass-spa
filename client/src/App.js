import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/Header.js';
import footer from './media/Footer_Frame.svg';
import MainPage from './components/MainPage/MainPage.js';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-Wrapper">
                        <Navbar></Navbar>
                        <div className="left-section">
                            <Header/>
                            <Switch>
                                <Route exact path="/">
                                    <MainPage/>
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
