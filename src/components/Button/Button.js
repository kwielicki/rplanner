import React, { useRef  } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import styles from './Button.scss'

function Button(props) {

    const buttonElement = useRef(null)

    const {
        size,
        type,
        variant,
        linkUrl,
        linkTitle,
        children,
    } = props

    const ButtonStyles = {
        '__link': true,
        [`--${variant}`]: variant,
        [`--${size}`]: size,
    }

    const __mouseenterHandler = (evt) => {
        // @TODO ripple effect here
        // const x = evt.pageX - element.current.offsetLeft
        // const y = evt.pageY - element.current.offsetTop
        // const w = element.current.offsetWidth
        console.log(buttonElement.current)
    }

    return (
        <div styleName='Button' onMouseDown={__mouseenterHandler} ref={buttonElement}>
            {type === 'internal'
                ? <Link styleName={classNames(ButtonStyles)} 
                        to={linkUrl} 
                        title={linkTitle}>{children}</Link>
                : <a href={linkUrl}
                     title={linkTitle}
                     target='_blank'
                     rel='nofollow noopener'
                     styleName={classNames(ButtonStyles)}>{children}</a>
            }
            <span styleName="__ripple"></span>
        </div>
    )
}

Button.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    type: PropTypes.oneOf(['internal', 'external']).isRequired,
    variant: PropTypes.oneOf(['default', 'primary', 'secondary']).isRequired,
    linkUrl: PropTypes.string.isRequired,
    linkTitle: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default CSSModules(styles, {allowMultiple: true})(Button)
