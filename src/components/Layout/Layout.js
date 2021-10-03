import './Layout.css'
import React from 'react'
import Calendar from 'react-calendar'

const Layout = () => {
    return (
        <div className="Layout">
            <div className="LayoutBox">
                <div className="Layout-header">
                    <h2>
                        Upcoming Events
                    </h2>
                </div>
                <div className="Layout-cont">
                    <div className="Layout-calender" >
                        <Calendar />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Layout

