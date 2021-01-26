
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Header from './components/Header/Header.js'
import footer from './media/Kaipass-footer_main-theme.svg';
import MainPage from './components/MainPage/MainPage.js'
import React from 'react'


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className="App-Wrapper">
        <Navbar></Navbar>
        <div className="left-section">
        <Header></Header>
        <MainPage></MainPage>
        

          <div className="left-section__footer">
            <img ></img>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
