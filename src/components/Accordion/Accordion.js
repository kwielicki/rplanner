import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Accordion.scss'

@CSSModules(styles, {allowMultiple: true})
class Accordion extends PureComponent {

    render() {

        const {
            style,
            children
        } = this.props
        return (
            <div styleName={classNames({
                            'Accordion': true,
                            [`--${style}`]: style
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
