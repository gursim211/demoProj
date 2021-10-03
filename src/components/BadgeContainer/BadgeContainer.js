import './BadgeContainer.css'
import React from 'react'
import Badge from './Badge/Badge'
const BadgeContainer = () => {
    return (
        <div className="badgecontainer">
            <Badge quantity="30" info="Active Projects"/>
            <Badge quantity="25" info="Active Projects in Dev"/>
            <Badge quantity="55" info="Active Projects in Paint"/>
            <Badge quantity="100" info="Completed Projects"/>
            <Badge quantity="75" info="Projects Delivered"/>
        </div>
    )
}

export default BadgeContainer
