import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Accordion.scss'

class Accordion extends PureComponent {

    render() {

        const {
            style,
            children
        } = this.props
        return (
            <div styleName={classNames({
                            'Accordion': true,
                            [`-${style}`]: style
            })}>
                {children}
            </div>
        )
    }
}

Accordion.propTypes = {
    style: PropTypes.oneOf(["wide", "short"]).isRequired,
    children: PropTypes.node.isRequired
}

export default Accordion
