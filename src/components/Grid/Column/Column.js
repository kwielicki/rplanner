import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Container from 'Components/Grid/Container'
import CSSModules from 'react-css-modules'
import styles from './Column.scss'

@CSSModules(styles, {allowMultiple: true})
class Column extends React.Component {
    render() {
        const  { xs, sm, md, lg, fluid, spacerBottom } = this.props
        return (
            <Container fluid={fluid}>
                <div styleName={classNames({
                    'Column': true,
                    [`--xs${xs}`]: xs,
                    [`--sm${sm}`]: sm,
                    [`--md${md}`]: md,
                    [`--lg${lg}`]: lg,
                    [`--spacer-bottom${spacerBottom}`]: spacerBottom
                })}>
                    {this.props.children}
                </div>
            </Container>
        )
    }
}

Column.propTypes = {
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    spacerBottom: PropTypes.oneOf(['30']),
    fluid: PropTypes.bool
}

export default Column