import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { isEmpty } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Rbutton.scss'


export default function Rbutton(props) {
    const { ariaLabel,
            asSubmit,
            asBlock,
            variant,
            label,
            handleClick,
            icon,
            iconPlacement,
            isLoader,
            disabled,
            size,
            space } = props
    return (
        <button
            onClick={handleClick}
            type={ asSubmit ? 'submit' : null }
            disabled={disabled}
            aria-label={ariaLabel}
            styleName={classNames({
                'Rbutton': true,
                [`-${variant}`]: variant,
                '-icon': icon,
                [`-${iconPlacement}`]: iconPlacement,
                '-asBlock': asBlock,
                '-disabled': disabled,
                'isLoader': isLoader,
                [`-${size}`]: size,
                [`-${space}`]: space
            })}>
            {icon && <FontAwesomeIcon icon={icon} styleName={classNames('__icon', {
                [`-${iconPlacement}`]: iconPlacement
            })}/>}
            {isLoader && <FontAwesomeIcon icon='spinner' styleName='__loader'/>}
            {!isEmpty(label) && <span styleName={classNames('__label', {
                [`-${iconPlacement}`]: iconPlacement
            })}>{label}</span>}
        </button>
    )
}

Rbutton.defaultProps = {
    variant: "primary"
}

Rbutton.propTypes = {
    ariaLabel: PropTypes.string,
    variant: PropTypes.string.isRequired,
    asBlock: PropTypes.bool,
    asSubmit: PropTypes.bool,
    label: PropTypes.string,
    icon: PropTypes.string,
    iconPlacement: PropTypes.oneOf(['top']),
    isLoader: PropTypes.bool,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    space: PropTypes.string
}
