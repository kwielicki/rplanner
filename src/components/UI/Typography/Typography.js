import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Typography.scss'

const Typography = (props) => {
  const {
    component: Component,
    display,
    variant,
    color,
    gutterBottom,
    noWrap,
    children
  } = props

  return (
    <Component
      styleName={classNames('Typography', {
        [`-${display}`]: display,
        [`-${variant}`]: variant,
        [`-${color}`]: color,
        '-gutterBottom': gutterBottom,
        '-noWrap': noWrap
      })}>{children}</Component>
  )
}

Typography.propTypes = {
  /**
   * 	Set the text-align on the component.
   */
  align: PropTypes.oneOf([
    'inherit',
    'left',
    'center',
    'right',
    'justify'
  ]),

  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * The color of the component.
   */
  color: PropTypes.oneOf([
    'black',
    'pink',
    'gray'
  ]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * Controls the display type
   */
  display: PropTypes.oneOf([
    'inline',
    'inlineBlock',
    'block',
    'flex',
    'inlineFlex'
  ]),

  /**
   * If true, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,

  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block
   * level elements (the element needs to have a width in order to overflow).
   */
  noWrap: PropTypes.bool,

  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'textBody',
    'textBody1',
    'textBody2'
  ]),
}

Typography.defaultProps = {
  display: 'block',
  component: 'h1',
  variant: 'h1',
  color: 'black'
}

export default Typography
