import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './GuestTableHeaderBasic.scss'

export default class GuestTableHeaderBasic extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div styleName='GuestTableHeaderBasic' role='row'>
                {data.map(header => (
                    <div key={header.id} role='columnheader' styleName={classNames({
                        '__header': true,
                        [`-${header.style}`]: header.style
                    })}>{header.info}</div>
                ))}
            </div>
        )
    }
}
GuestTableHeaderBasic.propTypes = {
    data: PropTypes.array.isRequired
}