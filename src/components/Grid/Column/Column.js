import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Container from 'Components/Grid/Container'
import CSSModules from 'react-css-modules'
import styles from './Column.scss'

@CSSModules(styles, {allowMultiple: true})
class Column extends React.Component {
    render() {
        const  { xs, sm, md, lg, fluid } = this.props
        return (
            <Container fluid={fluid}>
                <div styleName={classNames({
                    'Column': true,
                    [`--xs${xs}`]: xs,
                    [`--sm${sm}`]: sm,
                    [`--md${xs}`]: md,
                    [`--lg${xs}`]: lg
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
    fluid: PropTypes.bool
}

export default Column