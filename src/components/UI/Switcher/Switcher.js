import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Switcher.scss'

function Switcher(props) {
    const { checked, color, name, onChange, inputProps, disabled, label } = props

    return (
        <div styleName='Switcher'>
            <span>{label}</span>
            <div styleName='__inner'>
                <span aria-disabled='false' styleName={classNames({
                    '__button': true,
                    '-checked': checked,
                    '-disabled': disabled,
                    [`-${color}`]: color
                })}>
                    <span styleName='__label'>
                        <input
                            type='checkbox'
                            styleName='__input'
                            name={name}
                            onChange={onChange}
                            checked={checked}
                            disabled={disabled}
                            {...inputProps}
                        />
                        <span styleName='__thumb'></span>
                    </span>
                </span>
                <span styleName='__track'></span>
            </div>
        </div>
    )
}


Switcher.propTypes = {
    /**
     * Used to toggle checked value
     */
    checked: PropTypes.bool,
    /**
     * Used to set color
     */
    color: PropTypes.oneOf(['primary', 'secondary']),
    /**
     * Used to set onChange action
     */
    onChange: PropTypes.func,
    /**
     * Used to set name attribute for input
     */
    name: PropTypes.string,
    /**
     * Used to set custom props for input
     */
    inputProps: PropTypes.object,
    /**
     * Used to disable state
     */
    disabled: PropTypes.bool,
    /**
     * Used to set label
     */
    label: PropTypes.string
}


export default Switcher
