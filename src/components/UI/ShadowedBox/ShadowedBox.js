import React from 'react'
import './ShadowedBox.scss'

function ShadowedBox(props) {
    return (
        <div styleName="ShadowedBox">
            {props.children}
        </div>
    )
}

export default ShadowedBox
