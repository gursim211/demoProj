import React from 'react'
import Banner from './Banner'
import './menuBack.css'
import Menu from './Menu/Menu'
import { faCoffee, faExclamationCircle, faIdCard, faLocationArrow, faMugHot, faPen, faPencilRuler, faPenNib, faProcedures, faShippingFast, faShoppingCart, faTachometerAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MenuBack = () => {
    return (
        <>
            <div className="side-bar">

            <Banner />
            <Menu title="Dashboard" icon={<FontAwesomeIcon icon={faCoffee} color="#fff" />}/>
            <Menu title="Employees" icon={<FontAwesomeIcon icon={faTachometerAlt} color="#fff" />}/>
            <Menu title="Clients" icon={<FontAwesomeIcon icon={faMugHot} color="#fff" />}/>
            <Menu title="Accont Department" icon={<FontAwesomeIcon icon={faUserCircle} color="#fff" />}/>
            <Menu title="Job Card" icon={<FontAwesomeIcon icon={faIdCard} color="#fff" />}/>
            <Menu title="Retro Plan" icon={<FontAwesomeIcon icon={faCoffee} color="#fff" />}/>
            <Menu title="Design Department" icon={<FontAwesomeIcon icon={faPen} color="#fff" />}/>
            <Menu title="Project Department" icon={<FontAwesomeIcon icon={faPencilRuler} color="#fff" />}/>
            <Menu title="Production" icon={<FontAwesomeIcon icon={faProcedures} color="#fff" />}/>
            <Menu title="Purchase Department" icon={<FontAwesomeIcon icon={faShoppingCart} color="#fff" />}/>
            <Menu title="Problem" icon={<FontAwesomeIcon icon={faExclamationCircle} color="#fff" />}/>
            <Menu title="Design Changes" icon={<FontAwesomeIcon icon={faPenNib} color="#fff" />}/>
            <Menu title="Action Report" icon={<FontAwesomeIcon icon={faLocationArrow} color="#fff" />}/>
            <Menu title="Logistic" icon={<FontAwesomeIcon icon={faShippingFast} color="#fff" />}/>
     
            </div>
        </>
    )
}

export default MenuBack
