import './Header.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBed, faBell, faCommentAlt, faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header-main">
            <div className="header-cont">
                <div className="header-text">

                    <h2>
                        Alpha Nero Admin Dashboard
                    </h2>
                </div>
                <div className="header-icon">
                    <div className="head-icons">
                        <FontAwesomeIcon icon={faCommentAlt} color="#000" />
                    </div>
                    <div className="head-icons">
                        <FontAwesomeIcon icon={faBell} color="#000" />
                    </div>
                    <div className="head-icons">
                        <FontAwesomeIcon icon={faUser} color="#000" />
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Header
