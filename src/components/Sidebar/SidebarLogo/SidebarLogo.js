import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './SidebarLogo.scss'
import { NavLink } from 'react-router-dom'
import Logotype from '../../UI/Logotype';

@CSSModules(styles, {allowMultiple: true})
class SidebarLogo extends React.Component {

    render() {
        return (
            <div styleName='SidebarLogo'>
                <NavLink to='/'
                         title='Return to dashboard'
                         styleName='__link'>
                    <Logotype/>
                </NavLink>
            </div>
        )
    }
}

export default SidebarLogo