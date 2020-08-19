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
        curved,
        bold
    } = props

    const chipsStyles = {
        "Chips": true,
        [`-rounded`]: rounded,
        [`-curved`]: curved,
        [`-bold`]: bold,
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
    curved: PropTypes.bool,
    bold: PropTypes.bool,
    size: PropTypes.oneOf(["small", "big"]),
    type: PropTypes.oneOf(["primary", "secondary", "pending", "declined", "confirmed", "outlined"]).isRequired
}

export default Chips
