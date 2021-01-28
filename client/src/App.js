
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Header from './components/Header/Header.js'
import footer from './media/Footer_Frame.svg';
import MainPage from './components/MainPage/MainPage.js'
import React from 'react'
import MyCourses from "./components/MyCourses/MyCourses";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";


class App extends React.Component {
    render() {
        return (
            <div className="App">
               <div className="App-Wrapper">
                   <Navbar></Navbar>

                   <div className="left-section">
                       <Header></Header>
                       <MyCourses></MyCourses>
                       <div className="left-section__footer">
                           <img src={footer} alt=""/>
                           <div className="left-section__footer__patch"></div>
                       </div>
                   </div>

               </div>
            </div>
        );
    }
}
export default App;
