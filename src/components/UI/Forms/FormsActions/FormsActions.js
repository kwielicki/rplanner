import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './FormsActions.scss'

function FormsActions(props) {
    return (
        <div styleName='FormsActions'>{props.children}</div>
    )
}

export default CSSModules(styles, {allowMultiple: true})(FormsActions)
