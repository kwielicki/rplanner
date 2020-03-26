import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Chips.scss'

function Chips(props) {

    const {
        rounded,
        size,
        type,
        children,
    } = props

    const chipsStyles = {
        "Chips": true,
        [`-rounded`]: rounded,
        [`-${type}`]: type,
        [`-${size}`]: size,
    }

    return (
        <div styleName={classNames(chipsStyles)}>
            <span styleName="__text">{children}</span>
        </div>
    )
}

Chips.propTypes = {
    rounded: PropTypes.bool,
    size: PropTypes.oneOf(["small", "big"]),
    type: PropTypes.oneOf(["primary", "secondary", "pending", "declined", "confirmed"]).isRequired
}

export default Chips
