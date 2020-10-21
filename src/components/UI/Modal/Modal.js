import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import EscapeOutside from "react-escape-outside"
import { scrollBarSize } from 'Components/Helpers/scrollbarMeasure'
import { modalRoot } from 'Components/Helpers/domRoots'
import { isEmpty } from 'lodash'
import Rbutton from 'Components/Rbutton'
import IconButton from 'Components/UI/IconButton'
import './Modal.scss'

class ModalBody extends Component {
    render() {

        const {
            data: {
                headerTitle, headerDescription, headerSubtitle,
                onClose, onConfirm,
                closeLabel, confirmLabel,
                closeStyle, confirmStyle,
                children, size, side, type,
                footerStyle, bodyCentering
            },
            handleEscapeOutside } = this.props
        return (
            <div styleName='Modal'>
                <div styleName='__overlay'></div>
                <div styleName={classNames({
                    '__inner': true,
                    [`-${side}`]: side
                })}>
                    <EscapeOutside onEscapeOutside={handleEscapeOutside} styleName={classNames({
                        '__sizer': true,
                        [`-${size}`]: size,
                        [`-${side}`]: side
                    })}>
                        <div styleName='__content'>
                            <div styleName={classNames('__header', {
                                [`-${type}`]: type
                            })}>
                                <div styleName='__headerInner'>
                                    <h3 styleName={classNames('__headerTitle', {
                                        [`-${type}`]: type
                                    })}>
                                        <span styleName='__headerTitleSuffix' dangerouslySetInnerHTML={{__html: headerTitle}}></span>
                                        {!isEmpty(headerSubtitle) &&
                                            <strong styleName={classNames('__headerSubtitle', {
                                                [`-${type}`]: type
                                            })}>{headerSubtitle}</strong>}
                                    </h3>
                                    <p styleName='__headerDescription' dangerouslySetInnerHTML={{__html: headerDescription}}></p>
                                </div>
                                <div styleName='__close'>
                                    <IconButton ariaLabel="Close modal" icon='times' handleClick={handleEscapeOutside}/>
                                </div>
                            </div>
                            <div styleName={classNames('__body', {
                                [`-bodyCentering`]: bodyCentering
                            })}>{children}</div>
                            <div styleName={classNames('__footer', {
                                [`-${footerStyle}`]: footerStyle
                            })}>
                                {confirmLabel && <Rbutton handleClick={onConfirm} variant={confirmStyle} label={confirmLabel}/>}
                                {closeLabel && <Rbutton handleClick={onClose} variant={closeStyle} label={closeLabel}/>}
                            </div>
                        </div>
                    </EscapeOutside>
                </div>
            </div>
        )
    }
}

class Modal extends React.Component {

    constructor(props) {
        super(props)
        this.handleEscapeOutside = this.handleEscapeOutside.bind(this)
    }

    state = {
        isOpen: false,
        modalRoot: modalRoot()
    }

    handleEscapeOutside() {
        this.props.onClose()
    }

    componentDidMount() {
        this.setState({isOpen: this.props.isOpen})
        /* Scrollbar width is overriden by CSS styles
         * - for mobile his value is equal to 0,
         * - otherwise his value is equal 6 - determinet by CSS
         */
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = scrollBarSize().width > 0 ? `${6}px` : 0
    }

    componentWillUnmount() {
        this.setState({isOpen: this.props.isOpen})
        document.body.style.overflow = '',
        document.body.style.paddingRight = ''
    }

    render() {
        return this.state.isOpen && createPortal(
            <ModalBody data={this.props} handleEscapeOutside={this.handleEscapeOutside}/>
            ,this.state.modalRoot
        )
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(['danger']),
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
    closeLabel: PropTypes.string,
    closeStyle: PropTypes.string,
    confirmLabel: PropTypes.string,
    confirmStyle: PropTypes.string,
    headerTitle: PropTypes.string,
    headerSubtitle: PropTypes.string,
    headerDescription: PropTypes.string,
    children: PropTypes.node.isRequired,
    side: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'fluid']),
    footerStyle: PropTypes.oneOf(['spaceBetween']),
    bodyCentering: PropTypes.bool
}

export default Modal
