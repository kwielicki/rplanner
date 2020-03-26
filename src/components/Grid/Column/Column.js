import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Column.scss'

class Column extends React.Component {
    render() {
        const  { xs, sm, md, lg, xl, fluid, spacerBottom } = this.props
        return (
            <div styleName={classNames({
                'Column': true,
                [`-xs${xs}`]: xs,
                [`-sm${sm}`]: sm,
                [`-md${md}`]: md,
                [`-lg${lg}`]: lg,
                [`-xl${xl}`]: xl,
                [`-spacer-bottom${spacerBottom}`]: spacerBottom
            })}>
                {this.props.children}
            </div>
        )
    }
}

Column.propTypes = {
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
    spacerBottom: PropTypes.oneOf(['30']),
    fluid: PropTypes.bool
}

export default Column