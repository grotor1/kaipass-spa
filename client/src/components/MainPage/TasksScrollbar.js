import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'
import  './TasksScrollbar.css'

class TasksScrollbar extends React.Component{
    render() {
        return(
            <PerfectScrollbar>
                <div className=""></div>
            </PerfectScrollbar>
        )

    }
}