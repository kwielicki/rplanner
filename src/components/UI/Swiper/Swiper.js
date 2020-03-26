import React from 'react'
import PropTypes from 'prop-types'
import './Swiper.scss'

function Swiper(props) {
    const { children } = props
    return (
        <div styleName='Swiper'>
            <div styleName='__inner'>
                <div styleName='__items'>
                    {children.map((child, index) => (
                        <div styleName='__item' key={index}>{child}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Swiper.propTypes = {
    children: PropTypes.node.isRequired
}

export default Swiper
