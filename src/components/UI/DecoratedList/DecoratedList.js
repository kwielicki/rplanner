import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import styles from './DecoratedList.scss'

@CSSModules(styles, {allowMultiple: true})
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