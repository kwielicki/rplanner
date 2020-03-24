import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from './DecoratedListElement.scss'

@CSSModules(styles, {allowMultiple: true})
class DecoratedListElement extends PureComponent {
    render() {
        const { header, children, sizeDesktop, sizeMobile } = this.props
        return (
            <li styleName={classNames({
                'DecoratedListElement': true,
                [`--${sizeDesktop}`]: sizeDesktop,
                [`--${sizeMobile}`]: sizeMobile,
            })}>
                <div styleName='__inner'>
                    <strong styleName='__header'>{header}</strong>
                    <div styleName='__description'>{children}</div>
                </div>
            </li>
        )
    }
}

DecoratedListElement.propTypes = {
    /**
     * Used to set the header
     */
    header: PropTypes.string,
    /**
     * Used to set the description
     */
    children: PropTypes.node.isRequired,
    /**
     * Used to set list element width for desktop
     */
    sizeDesktop: PropTypes.oneOf(['quarter', 'oneThird', 'oneHalf', 'twoThirds', 'one']).isRequired,
    /**
     * Used to set list element width for mobile
     */
    sizeMobile: PropTypes.oneOf(['one', 'oneHalf']).isRequired,
}
DecoratedListElement.defaultProps = {
    sizeDesktop: 'oneThird',
    sizeMobile: 'one',
}

export { DecoratedListElement }