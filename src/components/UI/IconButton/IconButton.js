import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import './IconButton.scss'

const IconButton = forwardRef(function IconButton(props, ref) {

    const {
        children,
        ariaLabel,
        label,
        icon,
        size,
        variant,
        handleClick,
        ...other
    } = props

    return (
        <button {...other} ref={ref} styleName={classNames({
            'IconButton': true,
            [`-${size}`]: size
        })}
                aria-label={ariaLabel}
                onClick={handleClick}>
            {label && <span styleName='__label'>{label}</span>}
            <FontAwesomeIcon icon={icon}/>
        </button>
    )
})

IconButton.propTypes = {
    ariaLabel: PropTypes.string,
    label:PropTypes.string,
    icon: PropTypes.string.isRequired,
    size: PropTypes.string,
    handleClick: PropTypes.func
}

export default IconButton