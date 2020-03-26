import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import imagePlaceHolder from 'Assets/images/placeholder_768x768.png'
import LogoLight from 'Assets/images/wp-logo.png'
import LogoDark from 'Assets/images/wp-logo-dark.png'
import LazyImage from 'Components/LazyImage'

import './Logotype.scss'

function Logotype(props) {

    const {
        isLight
    } = props
    const logoVariant = isLight ? LogoLight : LogoDark
    return (
        <div styleName='Logotype'>
            
            <div styleName='__inner'>
                <div styleName='__logo'>
                    <LazyImage src={logoVariant} placeholder={imagePlaceHolder}/>
                </div>
                <div styleName='__text'>
                    <strong styleName={classNames({
                        '__textValue': true,
                        '-isLight': isLight
                    })}>Wedding Planner</strong>
                    <span styleName={classNames({
                        '__textNote': true,
                        '-isLight': isLight
                    })}>made with love...</span>
                </div>
            </div>
        </div>
    )
}

Logotype.propTypes = {
    isLight: PropTypes.bool
}



export default Logotype
