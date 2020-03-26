import React from 'react'
import './Loader.scss'

function Loader() {
    return (
        <div styleName="Loader">
            <div styleName="__inner">
                <div styleName="__line -x1"></div>
                <div styleName="__line -x2"></div>
                <div styleName="__line -x3"></div>
            </div>
        </div>
    )
}

export default Loader