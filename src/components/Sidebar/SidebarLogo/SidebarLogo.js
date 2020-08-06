import React from 'react'
import './SidebarLogo.scss'
import { NavLink } from 'react-router-dom'
import Logotype from 'Components/UI/Logotype'
import translations from 'Translations/translations.json'

export const SidebarLogo = () => {
    return (
        <div styleName='SidebarLogo'>
            <NavLink
                to='/'
                title={translations.properties.returnToDashboard}
                styleName='__link'>
                <Logotype isLight/>
            </NavLink>
        </div>
    )
}
