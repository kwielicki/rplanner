import React, { useState, useEffect } from 'react'
import './Sidebar.scss'
import MegaMenu from 'Components/Megamenu'
import { SidebarLogo } from './SidebarLogo'
import translations from 'Translations/translations.json'
import AppVersion from 'Components/Versions/AppVersion'

function Sidebar() {
    const [appVersionLabel, setAppVersionLabel] = useState('')

    useEffect(() => {
        setAppVersionLabel(translations?.properties?.appVersionLabel)
    }, [appVersionLabel])

    return (
        <div styleName='Sidebar'>
            <div styleName='__inner'>
                <SidebarLogo/>
                <MegaMenu/>
                <AppVersion
                    versionLabel={appVersionLabel}/>
            </div>
        </div>
    )
}

export default Sidebar
