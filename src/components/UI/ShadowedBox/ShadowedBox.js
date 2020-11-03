import React from 'react'
import classNames from 'classnames'
import './ShadowedBox.scss'

function ShadowedBox({stretched, heading, children}) {
    return (
        <div styleName={classNames('ShadowedBox', {
            '-stretched': stretched
        })}>
            {heading && <div styleName='__heading'>{heading}</div>}
            {children}
        </div>
    )
}

export default ShadowedBox
