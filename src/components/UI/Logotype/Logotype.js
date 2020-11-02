import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import SvgLogoLight from 'Assets/images/wp-logo.svg'
import LogoDark from 'Assets/images/wp-logo-dark.png'

import './Logotype.scss'

function Logotype(props) {

    const {
        isLight
    } = props
    const logoVariant = isLight ? true : false
    return (
        <div styleName='Logotype'>
            
            <div styleName='__inner'>
                <div styleName='__logo'>
                    {logoVariant ? <SvgLogoLight/> : <LogoDark/>}
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
