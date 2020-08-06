import React, { useState, useEffect } from 'react'
import './Sidebar.scss'
import MegaMenu from 'Components/Megamenu'
import { SidebarLogo } from './SidebarLogo'
import versions from 'Versions/versions.json'
import translations from 'Translations/translations.json'
import AppVersion from 'Components/Versions/AppVersion'

function Sidebar() {
    const [appVersion,setAppVersion] = useState('')
    const [appVersionLabel, setAppVersionLabel] = useState('')

    useEffect(() => {
        setAppVersion(versions?.appVersion)
    }, [appVersion])

    useEffect(() => {
        setAppVersionLabel(translations?.properties?.appVersionLabel)
    }, [appVersionLabel])

    return (
        <div styleName='Sidebar'>
            <div styleName='__inner'>
                <SidebarLogo/>
                <MegaMenu/>
                <AppVersion
                    version={appVersion}
                    versionLabel={appVersionLabel}/>
            </div>
        </div>
    )
}

export default Sidebar
