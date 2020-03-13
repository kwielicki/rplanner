import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import EscapeOutside from "react-escape-outside"
import { scrollBarSize } from 'Components/Helpers/scrollbarMeasure'
import { modalRoot } from 'Components/Helpers/modalRoot'
import styles from './Modal.scss'
import Rbutton from 'Components/Rbutton'

@CSSModules(styles, {allowMultiple: true})
class ModalBody extends Component {
    render() {

        const {
            data: {
                headerTitle, headerDescription,
                onClose, onConfirm,
                closeLabel, confirmLabel,
                closeStyle, confirmStyle,
                children, size
            },
            handleEscapeOutside } = this.props

        return (
            <div styleName='Modal'>
                <div styleName='__overlay'></div>
                <div styleName='__inner'>
                    <EscapeOutside onEscapeOutside={handleEscapeOutside} styleName={classNames({
                        '__sizer': true,
                        [`--${size}`]: size
                    })}>
                        <div styleName='__content'>
                            <div styleName='__header'>
                                <div styleName='__headerInner'>
                                    <h3 styleName='__headerTitle'>{headerTitle}</h3>
                                    <p styleName='__headerDescription'>{headerDescription}</p>
                                </div>
                                <div styleName='__close'>
                                    <Rbutton variant='tertiary' label="" icon='times' handleClick={handleEscapeOutside}/>
                                </div>
                            </div>
                            <div styleName='__body'>{children}</div>
                            <div styleName='__footer'>
                                <Rbutton handleClick={onClose} variant={closeStyle} label={closeLabel}/>
                                <Rbutton handleClick={onConfirm} variant={confirmStyle} label={confirmLabel}/>
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

    static defaultProps = {
        closeLabel: "Action 1",
        confirmLabel: "Action 2",
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
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    closeLabel: PropTypes.string.isRequired,
    closeStyle: PropTypes.string,
    confirmLabel: PropTypes.string.isRequired,
    confirmStyle: PropTypes.string,
    headerTitle: PropTypes.string,
    headerDescription: PropTypes.string,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['small', 'fluid'])
}

export default Modal