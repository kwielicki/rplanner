import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { isEmpty } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Rbutton.scss'


export default function Rbutton(props) {
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

    const { ariaLabel,
            asSubmit,
            asBlock,
            variant,
            label,
            handleClick,
            icon,
            iconPlacement,
            isLoader,
            disabled,
            size,
            space,
            unsetTextTransform,
            unserVerticalBorders } = props
    return (
        <button
        onClick={e => {
            const rect = e.target.getBoundingClientRect();
            setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            handleClick && handleClick(e);
          }}
            type={ asSubmit ? 'submit' : null }
            disabled={disabled}
            aria-label={ariaLabel}
            styleName={classNames({
                'Rbutton': true,
                [`-${variant}`]: variant,
                '-icon': icon,
                [`-${iconPlacement}`]: iconPlacement,
                '-asBlock': asBlock,
                '-disabled': disabled,
                'isLoader': isLoader,
                [`-${size}`]: size,
                [`-${space}`]: space,
                '-unsetTextTransform': unsetTextTransform,
                '-unserVerticalBorders': unserVerticalBorders
            })}>
            {icon && <FontAwesomeIcon icon={icon} styleName={classNames('__icon', {
                [`-${iconPlacement}`]: iconPlacement
            })}/>}
            {isLoader && <FontAwesomeIcon icon='spinner' styleName='__loader'/>}
            {!isEmpty(label) && <span styleName={classNames('__label', {
                [`-${iconPlacement}`]: iconPlacement
            })}>{label}</span>}
            {isRippling && <span style={{
                left: coords.x,
                top: coords.y }} 
                styleName='__ripple'></span>}
        </button>
    )
}


Rbutton.defaultProps = {
    variant: "primary"
}

Rbutton.propTypes = {
    ariaLabel: PropTypes.string,
    variant: PropTypes.string.isRequired,
    asBlock: PropTypes.bool,
    asSubmit: PropTypes.bool,
    label: PropTypes.string,
    icon: PropTypes.string,
    iconPlacement: PropTypes.oneOf(['top']),
    isLoader: PropTypes.bool,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    space: PropTypes.string,
    unsetTextTransform: PropTypes.bool,
    unserVerticalBorders: PropTypes.bool
}
