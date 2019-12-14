import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Logotype.scss'
import LogoLight from 'Assets/images/wp-logo.png'
import LogoDark from 'Assets/images/wp-logo-dark.png'
import LazyImage from '../../LazyImage'

function Logotype(props) {

    const {
        isLight
    } = props
    const logoVariant = isLight ? LogoLight : LogoDark

    return (
        <div styleName='Logotype'>
            <div styleName='__inner'>
                <div styleName='__logo'>
                    <LazyImage src={logoVariant}/>
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
