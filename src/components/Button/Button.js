import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import './Button.scss'

function Button(props) {
    const [coords, setCoords] = React.useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = React.useState(false);

    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
          setIsRippling(true);
          setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
      }, [coords]);

    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

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
        '-fullWidth': fullWidth,
        [`-${variant}`]: variant,
        [`-${size}`]: size,
    }


    return (
        <div styleName={classNames({
            'Button': true,
            '-fullWidth': fullWidth
        })} onClick={e => {
            const rect = e.target.getBoundingClientRect();
            setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}>
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
           {isRippling && <span style={{
                left: coords.x,
                top: coords.y }} 
                styleName='__ripple'></span>}
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

export default Button
