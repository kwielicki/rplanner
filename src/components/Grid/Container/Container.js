import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Container.scss'

class Container extends React.Component {
    render() {
        const  { fluid } = this.props
        return (
            <div styleName={classNames({
                 'Container': true,
                 '-fluid': fluid
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

export default Container