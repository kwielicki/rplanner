import React from 'react';
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules';
import classNames from 'classnames'
import styles from './RButton.scss'

class Rbutton extends React.Component {

    static defaultProps = {
        type: "primary",
        label: "Rbutton"   
    }

	render() {
        const  { type, label, handleClick } = this.props
		return (
			<button
                onClick={handleClick}
                styleName={classNames({
                    'Rbutton': true,
                    [`--${type}`]: type,
                })}>
                {label}
            </button>
		)
	}
}

Rbutton.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    handleClick: PropTypes.func
}

export default CSSModules(Rbutton,styles,{allowMultiple: true})
