import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Chips from 'Components/UI/Chips'
import EscapeOutside from "react-escape-outside"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Dropdown.scss'

export const Dropdown = (props) => {
    const { label, selected, options, handleClick } = props

    const [ isActiveOption, setIsActiveOption ] = useState(null)
    const [ isOpen, setIsOpen ] = useState(false)
    const [ selectedOption, setSelectedOption ] = useState(selected)
    
    const optionRef = useRef(null)
    const dropdownRef = useRef(null)

    const __handleToggleDropdown = () => setIsOpen(!isOpen)
    const __handleCloseDropdown = () => setIsOpen(false)
    const __checkIfOptionShouldByActive = ({id} = option) => {
        return id === isActiveOption
    }
    const __handleOptionClick = (id, option) => {
        setIsActiveOption(id)
        setSelectedOption(option)
    }
    const __scrollToActiveOption = ( activeOption ) => {
        return dropdownRef?.current.scroll({
            top: activeOption.offsetTop
        })
    }

    useEffect(() => {
        setIsActiveOption(selectedOption?.id)
    }, [isActiveOption])

    useEffect(() => {
        optionRef?.current && __scrollToActiveOption(optionRef.current)
    })

    return (
        <div styleName='Dropdown'>
            <EscapeOutside onEscapeOutside={__handleCloseDropdown}>
                <div styleName='__inner'>
                    <button
                        onClick={__handleToggleDropdown}
                        aria-haspopup={true}
                        aria-expanded={isOpen}
                        styleName={classNames('__button', {
                            'isOpened': isOpen
                        })}>
                            {label && <span styleName={classNames('__label', {
                                'isSelected': selectedOption?.label
                            })}>{label} {selectedOption.supTitle && `- ${selectedOption.supTitle}`}</span>}
                            {selectedOption?.label && <span styleName={classNames('__labelSelected', {
                                'isDirty': selectedOption?.label
                            })}>{selectedOption.label}</span>}
                            <span styleName='__icon'>
                                <FontAwesomeIcon icon='chevron-down'/>
                            </span>
                    </button>
                    {isOpen && <div styleName='__menu'>
                        <ul styleName='__menuList' ref={dropdownRef}>
                            {options && options.map((option) => (
                                <li
                                    key={option.id}
                                    ref={__checkIfOptionShouldByActive(option) ? optionRef : null}
                                    onClick={() => {
                                        __handleOptionClick(option.id, option)
                                        __handleCloseDropdown()
                                        handleClick()
                                    }}
                                    styleName={classNames({
                                        '__option': true,
                                        'isActive': __checkIfOptionShouldByActive(option) ? true : false,
                                    })}>
                                    {option.supTitle && <span styleName='__optionTitle'>{option.supTitle}</span>}
                                    {option.badge && <span styleName='__optionIcon'>
                                        <Chips type='outlined' curved><FontAwesomeIcon icon={option.badge}/></Chips></span> }
                                    <span>{option.label}</span>
                                </li>
                            ))}
                        </ul>
                        <FontAwesomeIcon icon='chevron-up' styleName='__menuIcon'/>
                    </div>}
                </div>
            </EscapeOutside>
        </div>
    )
}

Dropdown.propTypes = {
    /**
     * Callback for action after click on option
     */
    handleClick: PropTypes.func,
    /**
     * The label for dropdown
     */
    label: PropTypes.string.isRequired,
    /**
     * Object with data of selected option
     */
    selected: PropTypes.shape({
        /**
         * Id of an option. Must by unique.
         */
        id: PropTypes.number.isRequired,
        /**
         * The label for an option
         */
        label: PropTypes.string.isRequired,
        /**
         * The sup title for an option
         */
        supTitle: PropTypes.string,
        /**
         * The value for an option. Should by unique.
         */
        value: PropTypes.string.isRequired,
    }),
    options: PropTypes.arrayOf(PropTypes.shape({
        /**
         * Id of an option. Must by unique.
         */
        id: PropTypes.number.isRequired,
        /**
         * The label for an option
         */
        label: PropTypes.string.isRequired,
        /**
         * The value for an option. Should by unique.
         */
        supTitle: PropTypes.string,
        /**
         * The value for an option. Should by unique.
         */
        value: PropTypes.string.isRequired,
        /**
         * The badge for an option
         */
        badge: PropTypes.string
    }))
}
