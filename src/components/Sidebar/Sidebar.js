import React from 'react'
import './Sidebar.scss'
import MegaMenu from '../Megamenu'
import SidebarLogo from './SidebarLogo'
import Logout from 'Components/Logout'

class Sidebar extends React.Component {

    render() {
        return (
            <div styleName='Sidebar'>
                <div styleName='__inner'>
                    <SidebarLogo/>
                    <MegaMenu/>
                    <Logout/>
                </div>
            </div>
        )
    }
}

export default Sidebar