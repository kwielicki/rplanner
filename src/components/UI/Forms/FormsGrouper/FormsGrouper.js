import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './FormsGrouper.scss'

function FormsGrouper(props) {
    return (
        <div styleName='FormsGrouper'>{props.children}</div>
    )
}

export default CSSModules(styles, {allowMultiple: true})(FormsGrouper)
