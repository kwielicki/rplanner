import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AccordionHeader from 'Components/Accordion/AccordionItem/AccordionHeader'
import AccordionBody from 'Components/Accordion/AccordionItem/AccordionBody'

import styles from './AccordionItem.scss'
@CSSModules(styles, {allowMultiple: true})
class AccordionItem extends PureComponent {

    state = {
        isOpen: false,
        isActive: false
    }

    __accordionHeaderClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            isActive: !this.state.isActive,
        });
    }

    render() {

        const {
            header,
            children
        } = this.props
        return (
            <div styleName={classNames({
                'AccordionItem': true,
                'isActive': this.state.isActive
            })}>
                <AccordionHeader
                    header={header}
                    isActive={this.state.isActive}
                    handleClick={this.__accordionHeaderClick}/>
                <AccordionBody isOpen={this.state.isOpen}>
                    {children}
                </AccordionBody>
            </div>
        )
    }
}

AccordionItem.propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default AccordionItem
