import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './SidebarLogo.scss'
import { NavLink } from 'react-router-dom'
import Logotype from 'Components/UI/Logotype';

@CSSModules(styles, {allowMultiple: true})
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