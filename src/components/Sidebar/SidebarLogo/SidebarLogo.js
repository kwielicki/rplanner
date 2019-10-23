import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './SidebarLogo.scss'
import { NavLink } from 'react-router-dom'
import Logo from 'PATH_TO__ASSETS/images/wedding-planner-logo.svg'


@CSSModules(styles, {allowMultiple: true})
class SidebarLogo extends React.Component {

    render() {
        return (
            <NavLink to='/' title='Return to dashboard'>
                <figure styleName='SidebarLogo'>
                    <img 
                        src={Logo}
                        alt='Wedding Planner Logo'
                        styleName='__logo'/>
                    <figcaption styleName='__caption'>Wedding Planner</figcaption>
                </figure>
            </NavLink>
        )
    }
}

export default SidebarLogo