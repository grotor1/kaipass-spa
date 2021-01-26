import './Header.css'
import React from 'react'


class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className='header__search-block'></div>
                <div className="header__notifications-button">
                </div>
            </div>
        )
         
    }
}

export default Header