import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CSSModules from 'react-css-modules';
import styles from './Container.scss'

class Container extends React.Component {
    render() {
        const  { fluid } = this.props
        return (
            <div styleName={classNames({
                 'Container': true,
                 '--fluid': fluid
                })}>
                <div styleName="__row">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Container.propTypes = {
    fluid: PropTypes.bool
}

export default CSSModules(Container,styles, {allowMultiple: true})