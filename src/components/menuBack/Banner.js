import React from 'react'
import './banner.css'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Banner = () => {
    return (
        <div className="banner1">

            <div className="banner-icon">

                <FontAwesomeIcon icon={faCoffee} color="#fff" />
            </div>
            <div className="banner-text">
                <h3>
                    Alpha Hero
                </h3>
            </div>

        </div>
    )
}

export default Banner
