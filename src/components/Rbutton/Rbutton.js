import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { isEmpty } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Rbutton.scss'

class Rbutton extends React.Component {

    static defaultProps = {
        variant: "primary"
    }

	render() {
        const  { 
            asSubmit,
            asBlock,
            variant,
            label,
            handleClick,
            icon,
            isLoader,
            disabled,
            size,
            space
        } = this.props
		return (
			<button
                onClick={handleClick}
                type={ asSubmit ? 'submit' : null }
                disabled={disabled}
                styleName={classNames({
                    'Rbutton': true,
                    [`-${variant}`]: variant,
                    '-icon': icon,
                    '-asBlock': asBlock,
                    '-disabled': disabled,
                    'isLoader': isLoader,
                    [`-${size}`]: size,
                    [`-${space}`]: space
                })}>
                {icon && <FontAwesomeIcon icon={icon} styleName='__icon'/>}
                {isLoader && <FontAwesomeIcon icon='spinner' styleName='__loader'/>}
                {!isEmpty(label) && <span styleName='__label'>{label}</span>}
            </button>
		)
	}
}

Rbutton.propTypes = {
    variant: PropTypes.string.isRequired,
    asBlock: PropTypes.bool,
    asSubmit: PropTypes.bool,
    label: PropTypes.string,
    icon: PropTypes.string,
    isLoader: PropTypes.bool,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    space: PropTypes.string
}

export default Rbutton
