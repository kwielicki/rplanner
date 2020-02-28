import React from 'react'
import CSSModules from 'react-css-modules'
import { connect } from "react-redux"
import { logoutUser } from "Actions/auth"
import styles from './Logout.scss' 
import Rbutton from 'Components/Rbutton'

@CSSModules(styles, {allowMultiple: true})
class Logout extends React.Component {

    __handleLogout = () => {
        const { dispatch } = this.props
        dispatch(logoutUser())
    }

    render() {
        return (
            <div styleName='Logout'>
                <Rbutton variant='primary'
                         label="Logout"
                         icon='arrow-left'
                         handleClick={this.__handleLogout}/>
            </div>
        )
    }
}

export default connect()(Logout)