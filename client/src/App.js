
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Header from './components/Header/Header.js'
import footer from './media/Footer_Frame.svg';
import MainPage from './components/MainPage/MainPage.js'
import React from 'react'
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";


class App extends React.Component {
    render() {
        return (
            <div className="App">
               <Registration>
               </Registration>
            </div>
        );
    }
}
export default App;
