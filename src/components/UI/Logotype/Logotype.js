import React, { useState } from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Logotype.scss'
import Logo from 'Assets/images/wp-logo.png'
import LazyImage from '../../LazyImage'

function Logotype(props) {

    const {
        isLight
    } = props

    return (
        <div styleName='Logotype'>
            <div styleName='__inner'>
                <div styleName='__logo'>
                    <LazyImage src={Logo} styleName='__logoSource'/>
                </div>
                <div styleName='__text'>
                    <strong styleName={classNames({
                        '__textValue': true,
                        '--isLight': isLight
                    })}>Wedding Planner</strong>
                    <span styleName={classNames({
                        '__textNote': true,
                        '--isLight': isLight
                    })}>made with love...</span>
                </div>
            </div>
        </div>
    )
}

Logotype.propTypes = {
    isLight: PropTypes.bool
}

export default CSSModules(styles, {allowMultiple: true})(Logotype)
