import React from 'react';
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules';
import classNames from 'classnames'
import styles from './RButtonIco.scss'

class RButtonIco extends React.Component {

    static defaultProps = {
        type: "primary",
        label: "RbuttonIco"   
    }

	render() {
        const  { type, label, handleClick } = this.props
		return (
			<button
                onClick={handleClick}
                styleName={classNames({
                    'RbuttonIco': true,
                    [`--${type}`]: type,
                })}>
                {label}
            </button>
		)
	}
}

RButtonIco.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    handleClick: PropTypes.func
}

export default CSSModules(RButtonIco,styles,{allowMultiple: true})
