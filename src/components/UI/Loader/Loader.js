import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Loader.scss'

function Loader() {
    return (
        <div styleName="Loader">
            <div styleName="__inner">
                <div styleName="__line --x1"></div>
                <div styleName="__line --x2"></div>
                <div styleName="__line --x3"></div>
            </div>
        </div>
    )
}

export default CSSModules(styles, {allowMultiple: true})(Loader)