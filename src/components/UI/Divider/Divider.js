import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Divider.scss'

function Divider( props ) {

    const {
        variant = 'inset',
        position = 'left',
        spacer,
        light,
        component: Component = 'div',
        role = Component !== 'div' ? undefined : 'separator',
    } = props

    return (
        <Component 
            styleName={classNames({
                'Hr': true,
                [`-${variant}`]: variant,
                [`-${position}`]: position,
                '-light': light,
                '-spacer': spacer
            })}
            role={role}
        />
    )
}

Divider.propTypes = {
    /**
     * If `true`, the divider will have a margin-bottom and margin-top.
     */
    spacer: PropTypes.bool,
    /**
     * If `true`, the divider will have a lighter color.
     */
    light: PropTypes.bool,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['inset', 'fullWidth']),
    /**
     * The position to use.
     */
    position: PropTypes.oneOf(['left', 'center', 'right']),
    /**
     * @ignore
     */
    role: PropTypes.string,
}

export default Divider
