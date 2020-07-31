import React from 'react'
import PropTypes from 'prop-types'
import Chips from 'Components/UI/Chips'
import './AppVersion.scss'

export default function AppVersion(props) {
    const { version, versionLabel } = props
    return (
        <div styleName='AppVersion'>
            <span styleName='__label'>{versionLabel}</span>
            <span styleName='__version'>
                <Chips
                    type='primary'
                    curved
                    bold>
                    {version}
                </Chips>
            </span>
        </div>
    )
}

AppVersion.propTypes = {
    version: PropTypes.string.isRequired,
    versionLabel: PropTypes.string.isRequired
}
