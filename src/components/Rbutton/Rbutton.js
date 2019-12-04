import React from 'react';
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './RButton.scss'

@CSSModules(styles, {allowMultiple: true})
class Rbutton extends React.Component {

    static defaultProps = {
        variant: "primary",
        label: "Rbutton"
    }

	render() {
        const  { asSubmit, variant, label, handleClick, icon, isLoader } = this.props
		return (
			<button
                onClick={handleClick}
                type={ asSubmit ? 'submit' : null }
                styleName={classNames({
                    'Rbutton': true,
                    [`--${variant}`]: variant,
                    '--icon': icon,
                    'isLoader': isLoader
                })}>
                {icon && <FontAwesomeIcon icon={icon} styleName='__icon'/>}
                {isLoader && <FontAwesomeIcon icon='spinner' styleName='__loader'/>}
                <span styleName='__label'>{label}</span>
            </button>
		)
	}
}

Rbutton.propTypes = {
    variant: PropTypes.string.isRequired,
    asSubmit: PropTypes.bool,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    isLoader: PropTypes.bool,
    handleClick: PropTypes.func
}

export default Rbutton
