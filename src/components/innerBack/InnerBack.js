import React from 'react'
import BadgeContainer from '../BadgeContainer/BadgeContainer'
import Header from '../Header/Header'
import Layout from '../Layout/Layout'
import './InnerBack.css'

const innerBack = () => {
    return (
        <div className="main">
            <Header />
            <BadgeContainer/>
            <Layout/>

        </div>
    )
}

export default innerBack
