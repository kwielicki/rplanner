import React from 'react'
import styles from './ShadowedBox.scss'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'

function ShadowedBox(props) {
    return (
        <div styleName="ShadowedBox">
            {props.children}
        </div>
    )
}

export default CSSModules(styles, {allowMultiple: true})(ShadowedBox)
