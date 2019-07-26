import React from 'react'
import CurrentYear from '../CurrentYear/CurrentYear';
import CSSModules from 'react-css-modules';
import styles from './Copyright.scss'

@CSSModules(styles, {allowMultiple: true})
class Copyright extends React.Component {

    render() {
        return (
            <div styleName='Copyright'>
                <div styleName='__inner'>
                    <CurrentYear></CurrentYear>
                </div>
            </div>
        )
    }
}

export default Copyright