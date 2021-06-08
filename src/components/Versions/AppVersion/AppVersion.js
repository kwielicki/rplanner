import React from 'react'
import PropTypes from 'prop-types'
import Chips from 'Components/UI/Chips'
import { appVersion } from 'Utils/appVersion'
import './AppVersion.scss'
export default function AppVersion(props) {
    const { versionLabel } = props
    return (
        <div styleName='AppVersion'>
            <span styleName='__label'>{versionLabel}</span>
            <span styleName='__version'>
                <Chips
                    type='primary'
                    curved
                    bold>
                    {appVersion}
                </Chips>
            </span>
        </div>
    )
}

AppVersion.propTypes = {
    versionLabel: PropTypes.string.isRequired
}
