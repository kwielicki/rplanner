import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './Sidebar.scss'
import MegaMenu from '../Megamenu'

@CSSModules(styles, {allowMultiple: true})
class Sidebar extends React.Component {

    render() {
        return (
            <div styleName='Sidebar'>
                <div styleName='__inner'>
                    <MegaMenu/>
                </div>
            </div>
        )
    }
}

export default Sidebar