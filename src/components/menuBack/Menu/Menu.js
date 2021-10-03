import React from 'react'
import './Menu.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core'

const Menu = ({icon,title}) => {
    return (
        <div>
            <div className="bar">
                <div className="bar-icon">
                    {icon}
                </div>
                <div className="bar-text">
                    <p  >
                        {title}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Menu
