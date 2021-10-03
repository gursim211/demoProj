import './Badge.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'

const Badge = ({quantity,info}) => {
    return (
        <div className="Badge">
            <div className="Badgeicon">
                <FontAwesomeIcon icon={faUserCog} color="#000" />

            </div>
            <div className=" Badgecont">
                <h3>
                    {quantity}
                </h3>
                <p>{info}</p>

            </div>



        </div>
    )
}

export default Badge
