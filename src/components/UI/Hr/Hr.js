import React from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Hr.scss'

function Hr( props ) {

    const { wide, spacer } = props

    return (
        <div styleName={classNames({
            'Hr': true,
            [`--wide`]: wide,
            [`--spacer`]: spacer
        })}>
            <span styleName="__text">Thematic break</span>
        </div>
    )
}

Hr.propTypes = {
    small: PropTypes.bool,
    spacer: PropTypes.bool
}

export default CSSModules(styles, {allowMultiple: true})(Hr)
