import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './SelectSomething.scss'

const SelectSomething = props  => {

    const {
        defaultValue,
        defaultOption,
        options,
        onChange,
        value,
        disabled,
        labelForSelect,
        name,
        isFluid,
        isGray
    } = props

    const __options = option => {
        const { id, value, label } = option
        return <option value={value} key={id}>{label}</option>
    }

    return (
        <div styleName="SelectSomething">
            {labelForSelect &&
                <label styleName="__label"
                    htmlFor={name}>
                    {labelForSelect}
                </label>}
            <select onChange={onChange}
                    defaultValue={defaultValue}
                    value={value}
                    styleName={classNames({
                        "__select": true,
                        '-isFluid': isFluid,
                        '-isGray': isGray
                    })}
                    disabled={disabled}
                    name={name}>
                {defaultOption && <option value="" label={defaultOption}/>}
                {options.map( option => __options(option))}
            </select>
        </div>
    )
}

SelectSomething.propTypes = {
    defaultValue: PropTypes.string,
    defaultOption: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })),
    onChange: PropTypes.func,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    labelForSelect: PropTypes.string,
    isFluid: PropTypes.bool,
    isGray: PropTypes.bool
}


export default SelectSomething