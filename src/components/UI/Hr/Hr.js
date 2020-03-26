import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Hr.scss'

function Hr( props ) {

    const { wide, spacer } = props

    return (
        <div styleName={classNames({
            'Hr': true,
            [`-wide`]: wide,
            [`-spacer`]: spacer
        })}>
            <span styleName="__text">Thematic break</span>
        </div>
    )
}

Hr.propTypes = {
    small: PropTypes.bool,
    spacer: PropTypes.bool
}

export default Hr
