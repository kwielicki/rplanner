import React from 'react'
import { connect } from "react-redux"
import { logoutUser } from "Actions/auth"
import './Logout.scss' 
import Rbutton from 'Components/Rbutton'

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