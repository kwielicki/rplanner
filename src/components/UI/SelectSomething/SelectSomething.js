import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from './SelectSomething.scss'

const SelectSomething = props  => {

    const [isOpen] = useState(false);

    const {
        defaultValue,
        options,
        onChange,
        value,
        disabled
    } = props

    const __options = option => {
        const { id, value, label } = option
        return <option value={value} key={id}>{label}</option>
    }

    return (
        <div styleName="SelectSomething">
            <select onChange={onChange}
                    defaultValue={defaultValue}
                    value={value} 
                    styleName="__select"
                    disabled={disabled}>
                {options.map( option => __options(option))}
            </select>
        </div>
    )
}

SelectSomething.propTypes = {
    defaultValue: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })),
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}


export default CSSModules(styles, {allowMultiple: true})(SelectSomething)