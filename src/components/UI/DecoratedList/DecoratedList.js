import React, { PureComponent } from 'react'
import './DecoratedList.scss'

class DecoratedList extends PureComponent {
    render() {
        const { children } = this.props
        return (
            <div styleName='DecoratedList'>
                <ul styleName='__list'>
                    {children}
                </ul>
            </div>
        )
    }
}

export { DecoratedList }