import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import styles from './Button.scss'

function Button(props) {

    const buttonElement = useRef(null)
    const [ripple, setRipple] = useState(false);

    const {
        size,
        type,
        variant,
        linkUrl,
        linkTitle,
        fullWidth,
        children,
    } = props

    const ButtonStyles = {
        '__link': true,
        '--fullWidth': fullWidth,
        [`--${variant}`]: variant,
        [`--${size}`]: size,
    }

    const __mousEnterHandler = (evt) => {        
        setRipple(true);
    }

    const __mouseLeaveHandler = () => setRipple(false)

    return (
        <div styleName={classNames({
            'Button': true,
            '--fullWidth': fullWidth
        })} onMouseDown={__mousEnterHandler}
            onMouseLeave={__mouseLeaveHandler}
            ref={buttonElement}>
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
           <span styleName={classNames({
               '__ripple': true,
               '--isActive': ripple
           })}></span>
        </div>
    )
}

Button.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    type: PropTypes.oneOf(['internal', 'external']).isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
    linkUrl: PropTypes.string.isRequired,
    linkTitle: PropTypes.string,
    fullWidth: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default CSSModules(styles, {allowMultiple: true})(Button)
