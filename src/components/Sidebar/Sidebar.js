import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Sidebar.scss'
import MegaMenu from '../Megamenu'
import SidebarLogo from './SidebarLogo'

@CSSModules(styles, {allowMultiple: true})
class Sidebar extends React.Component {

    render() {
        return (
            <div styleName='Sidebar'>
                <div styleName='__inner'>
                    <SidebarLogo/>
                    <MegaMenu/>
                </div>
            </div>
        )
    }
}

export default Sidebar