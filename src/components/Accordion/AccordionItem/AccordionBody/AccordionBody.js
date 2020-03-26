import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './AccordionBody.scss'

class AccordionBody extends PureComponent {
    _element = React.createRef()

    __setAccordionBodyHeight = (props) => {
        const bodyHeight = this._element.current ? this._element.current.scrollHeight : 'none'
        return props.isOpen 
            ? { maxHeight: `${bodyHeight}px` }
            : { maxHeight: null }
    }

    render() {
        const {
            children,
            isOpen
        } = this.props

        return (
            <div styleName={classNames({
                    'AccordionBody': true,
                    'isOpen': isOpen
                })}
                ref={this._element}
                style={this.__setAccordionBodyHeight(this.props)}
                aria-expanded={isOpen ? true : false}>
                {children}
            </div>
        )
    }
}

AccordionBody.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    bodyHeight: PropTypes.number
}

export default AccordionBody
