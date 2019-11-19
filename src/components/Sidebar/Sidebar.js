import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Sidebar.scss'
import MegaMenu from '../Megamenu'
import SidebarLogo from './SidebarLogo'
import Logout from 'Components/Logout'

@CSSModules(styles, {allowMultiple: true})
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