import React from 'react'
import './SidebarLogo.scss'
import { NavLink } from 'react-router-dom'
import Logotype from 'Components/UI/Logotype'

class SidebarLogo extends React.Component {

    render() {
        return (
            <div styleName='SidebarLogo'>
                <NavLink to='/'
                         title='Return to dashboard'
                         styleName='__link'>
                    <Logotype isLight/>
                </NavLink>
            </div>
        )
    }
}

export default SidebarLogo